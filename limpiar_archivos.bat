@echo off
echo Limpiando archivos obsoletos del proyecto original...

cd /d "c:\Users\practicante.tecnolog\Documents\GitHub\Portafio"

echo Eliminando archivos JavaScript del proyecto original...
if exist counter.js del /f counter.js
if exist main.js del /f main.js
if exist script.js del /f script.js

echo Eliminando archivos HTML y CSS del proyecto original...
if exist index.html del /f index.html
if exist style.css del /f style.css

echo Eliminando archivos de librerías externas...
if exist particles.min.js del /f particles.min.js
if exist javascript.svg del /f javascript.svg

echo Eliminando archivos de configuración npm obsoletos...
if exist package.json del /f package.json
if exist package-lock.json del /f package-lock.json

echo Eliminando archivos duplicados...
if exist hoja_vida.pdf del /f hoja_vida.pdf

echo Eliminando carpeta public duplicada...
if exist public rmdir /s /q public

echo Verificando archivos restantes...
dir /b

echo.
echo ================================
echo Limpieza completada!
echo Solo deben quedar:
echo - .git/ (carpeta de control de versiones)
echo - .gitignore (archivo de configuración git)
echo - portafolio-react/ (proyecto React)
echo ================================
pause
