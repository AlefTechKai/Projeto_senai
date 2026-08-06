Dim shell
Set shell = CreateObject("WScript.Shell")

' Inicia o Backend sem janela (0 = oculto)
shell.Run "cmd /c cd /d """ & Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\")) & "backend"" && mvnw.cmd spring-boot:run", 0, False

' Aguarda 8 segundos para o backend subir
WScript.Sleep 8000

' Inicia o Frontend sem janela
shell.Run "cmd /c cd /d """ & Left(WScript.ScriptFullName, InStrRev(WScript.ScriptFullName, "\")) & "frontend"" && npm start", 0, False

WScript.Sleep 3000

' Abre o navegador
shell.Run "http://localhost:4200"
