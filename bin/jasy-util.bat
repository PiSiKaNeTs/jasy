@ECHO OFF
SET THISDIR=%~DP0
FOR %%X IN (python3.exe) DO (SET FOUND=%%~$PATH:X)
IF DEFINED FOUND python3 "%THISDIR%\jasy-util" %1 %2 %3 %4 %5 %6 %7 %8 %9 ELSE python "%THISDIR%\jasy-util" %1 %2 %3 %4 %5 %6 %7 %8 %9
