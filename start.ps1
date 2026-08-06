Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$rootDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Janela pequena no canto superior esquerdo
$form = New-Object System.Windows.Forms.Form
$form.Text = "Catalogo de Carros"
$form.Size = New-Object System.Drawing.Size(250, 165)
$form.StartPosition = "Manual"
$form.Location = New-Object System.Drawing.Point(10, 10)
$form.FormBorderStyle = "FixedToolWindow"
$form.TopMost = $true
$form.BackColor = [System.Drawing.Color]::FromArgb(17, 24, 39)

# Label status
$label = New-Object System.Windows.Forms.Label
$label.Text = "Iniciando servicos..."
$label.ForeColor = [System.Drawing.Color]::FromArgb(203, 213, 225)
$label.Font = New-Object System.Drawing.Font("Segoe UI", 9)
$label.Size = New-Object System.Drawing.Size(210, 20)
$label.Location = New-Object System.Drawing.Point(10, 10)
$form.Controls.Add($label)

# Label URL
$urlLabel = New-Object System.Windows.Forms.Label
$urlLabel.Text = "localhost:4200 | localhost:8080"
$urlLabel.ForeColor = [System.Drawing.Color]::FromArgb(255, 46, 76)
$urlLabel.Font = New-Object System.Drawing.Font("Segoe UI", 8)
$urlLabel.Size = New-Object System.Drawing.Size(210, 18)
$urlLabel.Location = New-Object System.Drawing.Point(10, 32)
$form.Controls.Add($urlLabel)

# Botao Abrir Browser
$btnBrowser = New-Object System.Windows.Forms.Button
$btnBrowser.Text = "Abrir no Browser"
$btnBrowser.Size = New-Object System.Drawing.Size(220, 28)
$btnBrowser.Location = New-Object System.Drawing.Point(10, 58)
$btnBrowser.BackColor = [System.Drawing.Color]::FromArgb(59, 130, 246)
$btnBrowser.ForeColor = [System.Drawing.Color]::White
$btnBrowser.FlatStyle = "Flat"
$btnBrowser.Font = New-Object System.Drawing.Font("Segoe UI", 8, [System.Drawing.FontStyle]::Bold)
$btnBrowser.Add_Click({ Start-Process "http://localhost:4200" })
$form.Controls.Add($btnBrowser)

# Botao Parar
$btnStop = New-Object System.Windows.Forms.Button
$btnStop.Text = "Parar Servicos"
$btnStop.Size = New-Object System.Drawing.Size(220, 28)
$btnStop.Location = New-Object System.Drawing.Point(10, 92)
$btnStop.BackColor = [System.Drawing.Color]::FromArgb(255, 46, 76)
$btnStop.ForeColor = [System.Drawing.Color]::White
$btnStop.FlatStyle = "Flat"
$btnStop.Font = New-Object System.Drawing.Font("Segoe UI", 8, [System.Drawing.FontStyle]::Bold)
$btnStop.Add_Click({
    $label.Text = "Encerrando..."
    $label.ForeColor = [System.Drawing.Color]::FromArgb(255, 46, 76)
    Stop-Job -Job $script:backendJob -ErrorAction SilentlyContinue
    Stop-Job -Job $script:frontendJob -ErrorAction SilentlyContinue
    Get-Process -Name "java" -ErrorAction SilentlyContinue | Stop-Process -Force
    Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
    $form.Close()
})
$form.Controls.Add($btnStop)

# Iniciar Backend em background
$script:backendJob = Start-Job -ScriptBlock {
    param($dir)
    Set-Location $dir
    & ".\mvnw.cmd" "spring-boot:run"
} -ArgumentList "$rootDir\backend"

$label.Text = "Backend iniciando..."

# Iniciar Frontend apos 8s em background
$timer = New-Object System.Windows.Forms.Timer
$timer.Interval = 8000
$timer.Add_Tick({
    $timer.Stop()
    $script:frontendJob = Start-Job -ScriptBlock {
        param($dir)
        Set-Location $dir
        npm start
    } -ArgumentList "$rootDir\frontend"
    $label.Text = "Servicos rodando"
    $label.ForeColor = [System.Drawing.Color]::FromArgb(34, 197, 94)
})
$timer.Start()

$form.ShowDialog()
