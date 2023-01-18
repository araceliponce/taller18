# Taller18






## Pasos:
ng g m principal
ng g c principal/usuarios

dentro de src/ crear carpeta environments, dentro de env... , crear 2 archivos:
- environment.prod.ts
- environment.ts

en ambos colocar: 

```
export const environment = {
  production:false;
}
```

:: en *prod.ts colocar true,
:: en *.ts si colocar false


en angular.json, debajo de linea 33?: que dice    "production": {

pegar: 
```
"fileReplacements": [
{
"replace": "src/environments/environment.ts",
"with": "src/environments/environment.prod.ts"
}
],
```

(debajo se pueden cambiar los budgets, si el proyecto al hacer build pesa mas de 500kb envia un warning, si supera 1mb ya envia un error)


ng build



añadir apiurl

ng g s services/userservices


en app.module.ts import httpclientmodule


editar userservices.service.ts y usuarios...ts y su html
