@echo off
echo Installing npprel:// protocol handler...

REM Use Python in the standard user path
set PYTHON_PATH=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
set SCRIPT_PATH=%~dp0npprel.py

REM Build a temporary reg file with correct paths
set TMPREG=%TEMP%\npprel.reg

REM Escape backslashes for .reg
set "PYTHON_PATH_ESC=%PYTHON_PATH:\=\\%"
set "SCRIPT_PATH_ESC=%SCRIPT_PATH:\=\\%"

(
echo Windows Registry Editor Version 5.00
echo.
echo [HKEY_CURRENT_USER\Software\Classes\npprel]
echo @="URL:npprel Protocol"
echo "URL Protocol"=""
echo.
echo [HKEY_CURRENT_USER\Software\Classes\npprel\shell\open\command]
echo @="\"%PYTHON_PATH_ESC%\" \"%SCRIPT_PATH_ESC%\" \"%%1\""
) > "%TMPREG%"

reg import "%TMPREG%"

echo.
echo npprel:// protocol installed.
pause
