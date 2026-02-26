# Notas de desenvolvimento
Algumas normas e tratos para padronizar o desenvolvimento
## Tecnologias usadas
### Linguagens
- HTML5
- CSS3
- Javascript
- PHP (v>=8)
### Frameworks e libs
- TailwindCSS (Estilização)

**Nota:** Usar o arquivo `./css/input.css` APENAS parar a necessidade de animações com `@keyframe` ou estilos específicos como `--moz`, `--webkit`, transições etc. Via de regra, usar as classes do Tailwind primáriamente.
- Bootstrap Icons (Ícones para o projeto)
## Padrões de código
- Comentar quando possível para clareza do código
- Antes de criar uma branch, use o `git pull origin main` para atualizar a sua `branch` main com a do repositório remoto
### Usar a seguinte notação para a cria a branch:
- Crie a sua branch a partir da `main`: estando na `main`, use o comando `git checkout -b <nome-da-branch>`
- **Não** comittar direto na `main`, crie uma branch específica para a sua tarefa
- para correção de erros: `fix/<nome-da-branch>`
- para incluir novidades: `feature/<nome-da-branch>`
- Após terminar a tarefa, faça o `git push origin <sua-branch>` e no Github abra o pull request para a `main`


## Hierarquia de pastas

### /css

Contém dois arquivos usados pelo TailwindCSS: `input.css` e `output.css`
- `input.css`: Arquivo que carrega estilos prévios e as dependências do TailwindCSS.
- `output.css`: Compila as classes usadas no HTML e os estilos do arquivo anterior. Este arquivo deve ser importado nas páginas HTML

### /js
Contém arquivos de lógica e de modelagem de dados
- `index.js`: Carrega os módulos e deve ser usado no HTML da seguinte forma:
`<script type="module" src="./js/index.js"></script>`

- `info.json`: Contém um JSON com todos os dados usados na página como: integrantes, projetos e seus respectivos dados

- `visual.js`: Deve ser usado para escrever funções relacionadas com animações. As mesmas devem ser exportadas na linha de `export{}` (Ultima linha do arquivo)
