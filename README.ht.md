[English](./README.md) | [Français](./README.fr.md) | [Kreyòl Ayisyen](./README.ht.md)

# Haiti Utils

[![npm version](https://img.shields.io/npm/v/@dolphfi_/haiti-utils.svg)](https://www.npmjs.com/package/@dolphfi_/haiti-utils)

`haiti-utils` se yon pakè npm ki lejè, san okenn depandans, ki bay zouti senp epi fyab pou travay avèk done jeyografik ayisyen.

## Poukisa pou w itilize `haiti-utils`?

- **Ekonomize tan**: Sispann pèdi tan ap chèche epi ekri lis depatman, komin, oswa kòd postal.
- **Done fyab**: Jwenn aksè a yon seri done konplè epi estriktire pou tout 10 depatman yo.
- **Fasil pou itilize**: Yon API senp epi fasil pou konprann, ki totalman type avèk TypeScript.
- **Pa sansib a la kas**: Tout fonksyon rechèch yo pa fè diferans ant lèt majiskil ak miniskil pou yon pi bon eksperyans pwogramasyon.

## Enstalasyon

```bash
npm install haiti-utils
# oswa
yarn add haiti-utils
# oswa
bun add haiti-utils
```

## Itilizasyon

Men kèk egzanp sou fason pou w itilize pake a.

### Jwenn lis tout depatman yo

```typescript
import { getDepartments } from 'haiti-utils';

const departments = getDepartments();
console.log(departments);
// Rezilta: ["Artibonite", "Centre", ...]
```

### Jwenn komin yo pou yon depatman espesifik

```typescript
import { getCommunes } from 'haiti-utils';

// Rechèch la pa sansib a la kas
const communes = getCommunes('Ouest'); 
console.log(communes);
// Rezilta: ["Arcahaie", "Cabaret", ...]
```

### Jwenn kòd postal yon komin

```typescript
import { getPostalCode } from 'haiti-utils';

// Rechèch la pa sansib a la kas pou depatman ak komin
const postalCode = getPostalCode('Ouest', 'Pétion-Ville');
console.log(postalCode);
// Rezilta: "HT6122"

const notFound = getPostalCode('Nord', 'InvalidCommune');
console.log(notFound);
// Rezilta: null
```

### Jwenn tout done yo

```typescript
import { getAllData } from 'haiti-utils';

const allData = getAllData();
console.log(allData[0].department); // "Artibonite"
console.log(allData[0].communes[0].name); // "Dessalines"
```

### Valide yon nimewo telefòn

```typescript
import { validatePhoneNumber } from 'haiti-utils';

validatePhoneNumber('+509 34 56 78 90'); // true
validatePhoneNumber('55555555'); // false
```

### Fòmate yon nimewo telefòn

```typescript
import { formatPhoneNumber } from 'haiti-utils';

// Fòma pa defo (entènasyonal)
formatPhoneNumber('34567890'); // "+509 34 56 78 90"

// Fòma nasyonal
formatPhoneNumber('+509 34.56.78.90', { format: 'national' }); // "3456-7890"

// Fòma konpak
formatPhoneNumber('34567890', { format: 'compact' }); // "+50934567890"

// Nimewo ki pa valab
formatPhoneNumber('12345'); // null
```

## Referans API

### `getDepartments(): string[]`

Retounen yon lis tout non depatman yo.

### `getCommunes(department: string): string[]`

Retounen yon lis tout komin yo pou yon depatman espesifik. Rechèch la pa sansib a la kas. Retounen yon tablo vid si depatman an pa jwenn.

### `getPostalCode(department: string, commune: string): string | null`

Retounen kòd postal yon komin espesifik nan yon depatman. Rechèch la pa sansib a la kas pou depatman ak komin. Retounen `null` si li pa jwenn oswa si kòd la pa disponib.

### `getAllData(): DepartmentData[]`

Retounen tout seri done konplè pou tout depatman yo ak komin yo.

### `validatePhoneNumber(phoneNumber: string): boolean`

Valide yon nimewo telefòn ayisyen. Fonksyon an jere fòma kouran yo, enkli kòd peyi `+509`, epi li inyore espas oswa tirè. Li retounen `true` si nimewo a valab, `false` otreman.

### `formatPhoneNumber(phoneNumber: string, options?: { format: 'international' | 'national' | 'compact' }): string | null`

Fòmate yon nimewo telefòn ayisyen nan yon fòma ki konsistan epi fasil pou li. Si nimewo a pa valab, li retounen `null`. Fòma pa defo a se `international`.

## Kontribisyon

Kontribisyon, rapò ensèk, ak demann pou nouvo fonksyonalite yo akeyi! Ou lib pou w tcheke [paj pwoblèm yo](https://github.com/dolphfi/haiti-utils/issues).
