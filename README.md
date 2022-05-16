# Projekt

Projekt strony internetowej zbudowany w oparciu o plik graficzny .psd

# Instalacja

Instalacja zależności

```bash
npm i
```

## Wymagania

- PHP
    - https://www.php.net/downloads.php
    - https://www.sitepoint.com/how-to-install-php-on-windows/
- Node.js (testowane z wersją 10 i 11)
    - https://nodejs.org/en/

## Zdefiniowane polecenia

```bash
npm run start
```

Tworzy nowy build produkcyjny, usuwając stare pliki

```bash
npm run build
```

Wysyła pliki na serwer FTP ( wymaga podania danych dostępowych do FTP w pliku gulpfile.js w funkcji deploy )

```bash
npm run deploy
```

- DEPLOY:

    - W przypadku wysyłania na serwer FTP wersji produkcyjnej, możemy ustalić do jakiego katalogu mają trafiać pliki:
        
        ```javascript
            function deploy() {
            const conn = vftp.create({
                host: '', // uzupełniamy dane
                user: '', // uzupełniamy dane
                password: '', // uzupełniamy dane
                parallel: 10,
                debug: true
            });

            const globs = [
                'dist/**'
            ];
            return src(globs, { base: 'dist', buffer: false })
                .pipe(conn.newer('/')) //nazwa katalogu np. /projekt
                .pipe(conn.dest('/')); //nazwa katalogu np. /projekt
        }
        ```

    

