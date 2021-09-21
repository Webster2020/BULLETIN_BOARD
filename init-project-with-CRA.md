# Wymagania

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

# Uwagi

- Husky od wersji 3.0.0 wymaga Gita w wersji min. 2.13.2 – jeśli masz starszą wersję Gita, zaktualizuj go (wersję możesz sprawdzić za pomocą `git --version`)

# Inicjowanie nowego projektu

## 1. Stworzenie katalogu projektu

Sklonuj puste repozytorium, lub stwórz katalog projektu.

## 2. Inicjacja projektu za pomocą CRA

`npx create-react-app .`

## 3. Zmiana struktury plików

```
rm src/*.css src/*.svg public/*.png public/favicon.ico public/manifest.json
echo -e "# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nDisallow: /" > public/robots.txt
mkdir src/styles
touch src/styles/global.scss src/styles/settings.scss
mkdir src/components
mkdir src/components/common src/components/features src/components/layout src/components/views
mkdir src/components/layout/MainLayout
touch src/components/layout/MainLayout/MainLayout.js
mkdir src/components/layout/Header
touch src/components/layout/Header/Header.js src/components/layout/Header/Header.module.scss
mkdir src/redux
touch src/redux/store.js src/redux/globalRedux.js
```

## 4. Dostosowanie `index.js` i `App.js` do nowej struktury

- z obu plików usuń importy plików `.css`,
- z `App.js` usuń import `logo`,
- z komponentu `App` usuń `<img>`.

## 5. Instalacja dodatkowych pakietów

```
yarn add npm-run-all node-sass react-router-dom redux react-redux enzyme enzyme-adapter-react-16 react-test-renderer

yarn add -D husky lint-staged redux-devtools-extension
```

## 6. Uzupełnienie konfiguracji `package.json`

**Uwaga**: nie edytuj tego pliku dopóki nie zakończą się operacje z poprzedniego kroku. Tamte operacje zmieniają plik `package.json`.

Zamień całą sekcję `scripts` na następujący kod:

``` json
  "scripts": {
    "start": "run-p start:* ",
    "start-silent": "run-p start > /dev/null",
    "start:react": "react-scripts start",
    "start-and-test": "run-p start-silent test ",
    "build": "react-scripts build",
    "test": "react-scripts test --noStackTrace",
    "test-all": "react-scripts test --watchAll=false --noStackTrace",
    "test-related": "react-scripts test --watchAll=false --noStackTrace --findRelatedTests",
    "eject": "react-scripts eject"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.js": [
      "yarn test-related --",
      "eslint"
    ]
  },
```

## 7. Konfiguracja Enzyme

Stwórz plik `src/setupTests.js` i wklej do niego:

``` js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

## 8. Dodanie `.editorconfig`

W głównym katalogu projektu stwórz plik `.editorconfig` i wklej do niego:

```
root = true

[*]
end_of_line = lf
charset = utf-8
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
core.autocrlf = true
```

Pamiętaj, że ten plik pomoże Ci zadbać o formatowanie plików, ale tylko jeśli Twój edytor ma wsparcie (lub zainstalowany plugin) dla EditorConfig.

## 9. Konfiguracja ESLinta

ESLint jest instalowany wraz z `react-scripts`, ale warto zmienić jego domyślną konfigurację.

Usuń z `package.json` sekcję `eslint`, a następnie w głównym katalogu projektu stwórz plik `.eslintrc` i wklej do niego:

``` json
{
  "env": {
     "es6": true,
     "browser": true,
     "node": true,
     "jest": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "react-app"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "linebreak-style": [
      "off"
    ],
    "quotes": [
      "error",
      "single",
      {"allowTemplateLiterals": true}
    ],
    "semi": [
      "error",
      "always"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "no-console": "off"
  }
}
```

**Uwaga**: aby lintowanie projektu opartego na CRA było możliwe nie tylko podczas uruchamiania komend `react-scripts`, należy dodatkowo pobrać następujące paczki:
​
```
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
​
Pozwoli Ci to na sprawdzanie aplikacji bezpośrednio, bez użycia `react-scripts`, np. za pomocą komendy `yarn lint`.


# Uruchamianie projektu

## W trakcie developmentu

- testy w osobnym terminalu:
  - `yarn start`
  - `yarn test`
- testy w tym samym terminalu:
  - `yarn start-and-test`

## Budowanie wersji produkcyjnej

- `yarn build`

# Przydatne Linki

- [CRA](https://facebook.github.io/create-react-app/) – Create React App
- [React-scripts](https://www.npmjs.com/package/react-scripts) – główny pakiet projektu stworzonego za pomocą CRA
- [Yarn](https://yarnpkg.com/en/docs/install) – instalacja narzędzia zastępującego `npm`

  "dependencies": {
    "@material-ui/core": "^4.7.0",
    "@material-ui/icons": "^4.5.1",
    "axios": "^0.19.0",
    "clsx": "^1.0.4",
    "enzyme": "^3.10.0",
    "enzyme-adapter-react-16": "^1.15.1",
    "node-sass": "^4.13.0",
    "npm-run-all": "^4.1.5",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-redux": "^7.1.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.2.0",
    "react-test-renderer": "^16.12.0",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0"
  },
  "devDependencies": {
    "husky": "^3.1.0",
    "lint-staged": "^9.4.3",
    "redux-devtools-extension": "^2.13.8"
  }