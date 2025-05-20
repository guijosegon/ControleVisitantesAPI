# 📋 Controle de Visitantes API

API REST desenvolvida em **JavaScript (Node.js)** com **MongoDB** para gerenciamento de visitantes, funcionários, ingressos e visitas em ambientes controlados.

## 🚀 Funcionalidades

- ✅ Cadastro e gerenciamento de visitantes
- 🧑‍💼 Cadastro e gerenciamento de funcionários
- 🧾 Registro de ingressos
- 📅 Controle de visitas realizadas
- 🔄 Atualização e exclusão de registros
- 📊 Integração com MongoDB para persistência de dados

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## 📁 Estrutura do Projeto

```
src/
├── controller/                  # Lógica de controle
│   ├── funcionarioController.js
│   ├── ingressoController.js
│   ├── visitaController.js
│   └── visitanteController.js
├── model/                       # Modelos Mongoose
│   ├── funcionario.js
│   ├── ingresso.js
│   ├── visita.js
│   └── visitante.js
├── route/                       # Definições de rotas
│   ├── funcionarioRoute.js
│   ├── ingressoRoute.js
│   ├── visitaRoute.js
│   └── visitanteRoute.js
├── app.js                       # Inicialização do app Express
├── mongodb.js                   # Conexão com MongoDB
package.json
```

## ▶️ Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/guijosegon/ControleVisitantesAPI.git
   cd ControleVisitantesAPI
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o MongoDB no arquivo `mongodb.js`**

4. **Inicie a aplicação:**
   ```bash
   node src/app.js
   ```

---

Este projeto é de código aberto e pode ser usado livremente para fins acadêmicos ou profissionais.
