<a name="readme-top"></a>

# SketchBrush

A Next.js application that transforms UI sketches on a virtual canvas into ready-to-use HTML and TailwindCSS code using GPT-4o.

<img width="1920" alt="GPlus - Landing page" src="">

This works by just taking the current canvas SVG, converting it to a PNG, and sending that png to gpt-4-vision with instructions to return a single html file with tailwind.

## Build with
[![Next][Next.js]][Next-url] [![TypeScript][TypeScript]][TypeScript-url] [![GPT-4o][gpt-4o]][gpt-4o-url] [![TailwindCSS][Tailwind-css]][Tailwind-url] 

## Getting Started

To get started run the following commands in the root directory of the project. 
You will need an OpenAI API key with access to the GPT-4 Vision API.

> Note this uses Next.js 14 and requires a version of `node` greater than 18.17. [Read more here](https://nextjs.org/docs/pages/building-your-application/upgrading/version-14).

```bash
echo "OPENAI_API_KEY=sk-your-key" > .env.local
npm install
npm run dev
```
## Getting Started 🎉
To get a local copy up and running on your machine, follow these simple steps.

### Prerequisites
1.  Downloading and installing Node.js and npm
  ```sh
  npm install npm@latest -g
  ```
2.  Generate a API key with access to the GPT-4o API - [https://platform.openai.com/](https://platform.openai.com/)

### Installation
1.  Clone the repository
   ```sh
   git clone https://github.com/imvinojanv/gplus-gpa-calculator.git
   ```
2.  Install NPM packages
   ```sh
   npm install
   ```
3.  Create .env.local file with API
   ```js
   OPENAI_API_KEY='YOUR_KEY'
   ```
4.  Run the application
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right"><a href="#readme-top">back to top ☝️</a></p>

<!-- LICENSE -->
### License ©️
MIT © [imvinojanv](https://github.com/imvinojanv)

<!-- BUILD WITH URLs -->
[Next.js]: https://img.shields.io/badge/next_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[gpt-4o]: https://img.shields.io/badge/gpt_4o-000000?style=for-the-badge&logo=openai&logoColor=white
[gpt-4o-url]: https://platform.openai.com/
[TypeScript]: https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/ 
[Tailwind-css]: https://img.shields.io/badge/Tailwind-161d2d?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[Tailwind-url]: https://tailwindcss.com/