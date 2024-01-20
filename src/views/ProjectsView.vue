<template>
    <div class="flex min-w-full justify-center absolute top-[30vh] text-black">

        <div class="px-[4vw] py-[5vh] w-1/3 grid justify-center bg-fixed bg-no-repeat bg-cover text-slate-800  rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <h1 id="Projects" class="text-2xl">Projects</h1>
        </div>

        <div class="absolute top-[25vh] left-3 md:left-40 p-4 justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <a rel="noopener" target="_blank" href="https://github.com/KogaTsuki/GPTBot"><img class="w-20 h-auto" src="../assets/openai-logo.png" alt="GPTBot Logo" loading="eager"></a>
        </div>
        <div class="absolute top-[25vh]  left-36 md:left-80 p-5 mr-3 md:mr-16 md:max-w-2xl grid content-center justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <p>A discord bot made using OpenAI's chat API, discord.js and JavaScript. The bot when prompted uses the API to fetch an answer for the user's provided prompt, using JavaScript the answer is interpreted and handed off to discord.js functions to display to the user, all running on node.js.</p>
        </div>

        <div class="absolute w-30 h-30 top-[90vh] sm:top-[55vh] right-3 md:right-40 p-4 justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <a rel="noopener" href="https://www.koshgupta.ca"><h1 class="text-6xl" style="background-image: url(./src/assets/images/bg4.svg);">KG</h1></a>
        </div>
        <div class="absolute top-[90vh] sm:top-[55vh] right-36 md:right-80 p-5 ml-3 md:ml-16 md:max-w-2xl grid content-center justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <p>A personal website that I am always working and improving upon. I recently moved it from vanilla to Vue.js. Uses HTML for page elements, TailwindCSS for styling, and JavaScript to handle small features. This website also happens to be what you are viewing this on!</p>
        </div>

        <div class="absolute w-30 h-30 top-[155vh] sm:top-[85vh] left-3 md:left-40 p-4 justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <a rel="noopener" target="_blank" href="https://www.koshgupta.ca"><img src="../assets/icon.png" alt="BetterBookmarks" class="w-20 h-auto"></a>
        </div>
        <div class="absolute top-[155vh] sm:top-[85vh] left-36 md:left-80 p-5 mr-3 md:mr-16 md:max-w-2xl grid content-center justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <p>A chrome extension called BetterBookmarks. The extension when clicked on displays a list of user saved urls. You can easily add more urls or add the current focused page to the list. Built using HTML and JavaScript, styled using CSS and Tailwind.</p>
        </div>

        <div class="absolute w-30 h-30 top-[220vh] sm:top-[115vh] right-3 md:right-40 p-4 justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <a rel="noopener" href="https://www.koshgupta.ca"><h1 class="text-6xl" style="background-image: url(./src/assets/images/bg4.svg);">ST</h1></a>
        </div>
        <div class="absolute top-[220vh] sm:top-[115vh] right-36 md:right-80 p-5 ml-3 md:ml-16 md:max-w-2xl grid content-center justify-center bg-fixed bg-no-repeat bg-cover rounded-xl shadow-xl" style="background-image: url(/box-img.svg)">
            <p>A simple tax calculator that uses Python to calculate an estimated income tax owed based on 2022 Canadian tax rates and brackets. The calculation does not include CPP, EI and other deductions.</p>
        </div>

    </div>
    
</template>