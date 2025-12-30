## $${\color{red}TYPI \ - \ Type \ Your \ Progress \ In}$$

**Touchtype and learn at the same time.**<br>
Touchtyping app with custom text input. <br>



```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typing Speed Tester</title>
    <style>
        :root {
            --background-color-light: hsla(230, 80%, 98%, 1);
            --toggle-light: hsla(230, 25%, 10%, 1);
            --line-light: hsla(230, 35%, 92.5%, 1);
            --dot-light: hsla(230, 25%, 75%, 1);
            --text-top-light: hsla(240, 25%, 10%, 1);
            --text-bottom-light: hsla(240, 25%, 25%, 1);
            --text-circle-light: hsla(240, 25%, 25%, 1);
            --button-bg-light: #007bff;
            --button-bg-hover-light: #0056b3;
            --progress-bg-light: #e0e0e0;
            --progress-fill-light: #007bff;
            --input-bg-light: #fff;
            --input-border-light: #ccc;
            --mode-btn-bg-light: #ccc;
            --mode-btn-active-bg-light: #007bff;
            --pause-btn-bg-light: #ffc107;
            --pause-btn-paused-bg-light: #28a745;

            --background-color-dark: hsla(230, 55%, 4%, 1);
            --toggle-dark: hsla(230, 25%, 75%, 1);
            --line-dark: hsla(230, 25%, 15%, .75);
            --dot-dark: hsla(230, 25%, 90%, 1);
            --text-top-dark: hsla(240, 60%, 90%, 1);
            --text-bottom-dark: hsla(240, 60%, 95%, 1);
            --text-circle-dark: hsla(240, 60%, 95%, .15);
            --button-bg-dark: #0056b3;
            --button-bg-hover-dark: #003d82;
            --progress-bg-dark: #444;
            --progress-fill-dark: #0056b3;
            --input-bg-dark: #333;
            --input-border-dark: #555;
            --mode-btn-bg-dark: #555;
            --mode-btn-active-bg-dark: #0056b3;
            --pause-btn-bg-dark: #e0b707;
            --pause-btn-paused-bg-dark: #1f7a33;

            color-scheme: light;

            --x: 50%;
            --y: 50%;

            --background-color: var(--background-color-light);
            --toggle-color: var(--toggle-light);
            --line-color: var(--line-light);
            --dot-color: var(--dot-light);
            --text-color-top: var(--text-top-light);
            --text-color-bottom: var(--text-bottom-light);
            --text-color-circle: var(--text-circle-light);
            --button-bg: var(--button-bg-light);
            --button-bg-hover: var(--button-bg-hover-light);
            --progress-bg: var(--progress-bg-light);
            --progress-fill: var(--progress-fill-light);
            --input-bg: var(--input-bg-light);
            --input-border: var(--input-border-light);
            --mode-btn-bg: var(--mode-btn-bg-light);
            --mode-btn-active-bg: var(--mode-btn-active-bg-light);
            --pause-btn-bg: var(--pause-btn-bg-light);
            --pause-btn-paused-bg: var(--pause-btn-paused-bg-light);
        }

        html.dark {
            color-scheme: dark;

            --background-color: var(--background-color-dark);
            --toggle-color: var(--toggle-dark);
            --line-color: var(--line-dark);
            --dot-color: var(--dot-dark);
            --text-color-top: var(--text-top-dark);
            --text-color-bottom: var(--text-bottom-dark);
            --text-color-circle: var(--text-circle-dark);
            --button-bg: var(--button-bg-dark);
            --button-bg-hover: var(--button-bg-hover-dark);
            --progress-bg: var(--progress-bg-dark);
            --progress-fill: var(--progress-fill-dark);
            --input-bg: var(--input-bg-dark);
            --input-border: var(--input-border-dark);
            --mode-btn-bg: var(--mode-btn-bg-dark);
            --mode-btn-active-bg: var(--mode-btn-active-bg-dark);
            --pause-btn-bg: var(--pause-btn-bg-dark);
            --pause-btn-paused-bg: var(--pause-btn-paused-bg-dark);
        }

        body {
            font-family: "Instrument Sans", Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100dvh;
            margin: 0;
            background-color: var(--background-color);
            color: var(--text-color-top);
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .container {
            background: var(--input-bg);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            width: 90%;
            max-width: 800px;
            text-align: center;
            transition: background-color 0.3s;
        }

        h1 {
            margin-bottom: 20px;
            font-size: 24px;
        }

        .controls {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 15px;
        }

        .mode-toggle {
            display: inline-flex;
            gap: 10px;
            align-items: center;
        }

        .text-mode-toggle {
            display: inline-flex;
            gap: 10px;
        }

        .mode-btn, .text-mode-btn, .pause-btn, .custom-text-submit {
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .mode-btn, .text-mode-btn {
            background: var(--mode-btn-bg);
            color: var(--text-color-top);
        }

        .mode-btn.active, .text-mode-btn.active {
            background: var(--mode-btn-active-bg);
            color: var(--input-bg);
        }

        .pause-btn {
            background: var(--pause-btn-bg);
            color: var(--text-color-top);
        }

        .pause-btn.paused {
            background: var(--pause-btn-paused-bg);
            color: var(--input-bg);
        }

        .custom-text-form {
            display: none;
            margin-top: 10px;
        }

        .custom-text-form.active {
            display: block;
        }

        .custom-text-input {
            width: 100%;
            height: 80px;
            font-size: 16px;
            padding: 10px;
            border: 2px solid var(--input-border);
            border-radius: 5px;
            margin-bottom: 10px;
            resize: none;
            background: var(--input-bg);
            color: var(--text-color-top);
            transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }

        .custom-text-submit {
            background: var(--button-bg);
            color: var(--input-bg);
        }

        .custom-text-submit:hover {
            background: var(--button-bg-hover);
        }

        .paragraph {
            font-size: 18px;
            line-height: 1.5;
            background: var(--input-bg);
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            min-height: 100px;
            text-align: left;
            overflow-x: auto;
            transition: background-color 0.3s;
            border: 1px solid var(--input-border);
        }

        .correct {
            color: green;
        }

        .incorrect {
            color: red;
            text-decoration: underline;
        }

        .current {
            background: yellow;
        }

        html.dark .current {
            background: #b3a800;
        }

        .input-area {
            width: 100%;
            height: 120px;
            font-size: 16px;
            padding: 10px;
            border: 2px solid var(--input-border);
            border-radius: 5px;
            margin-bottom: 10px;
            resize: none;
            background: var(--input-bg);
            color: var(--text-color-top);
            transition: border-color 0.3s, background-color 0.3s, color 0.3s;
        }

        .progress-bar {
            width: 100%;
            height: 10px;
            background: var(--progress-bg);
            border-radius: 5px;
            margin-bottom: 20px;
            overflow: hidden;
            transition: background-color 0.3s;
        }

        .progress {
            height: 100%;
            background: var(--progress-fill);
            width: 0;
            transition: width 0.3s;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;
        }

        .stat {
            font-size: 16px;
        }

        .feedback, .mistakes {
            font-size: 16px;
            margin-bottom: 20px;
            color: var(--text-color-bottom);
            transition: color 0.3s;
        }

        .reset-btn {
            padding: 12px 24px;
            font-size: 18px;
            background: var(--button-bg);
            color: var(--input-bg);
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .reset-btn:hover {
            background: var(--button-bg-hover);
        }

        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            h1 {
                font-size: 20px;
            }
            .paragraph {
                font-size: 16px;
            }
            .input-area, .custom-text-input {
                font-size: 14px;
                height: 100px;
            }
            .mode-btn, .text-mode-btn, .pause-btn, .custom-text-submit {
                padding: 8px 16px;
                font-size: 14px;
            }
            .reset-btn {
                padding: 10px 20px;
                font-size: 16px;
            }
            .stats {
                flex-direction: column;
                gap: 10px;
            }
        }

        .toggle {
            cursor: pointer;
            margin-left: 10px;
        }

        .toggle input {
            display: none;
        }

        .toggle input + div {
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: relative;
            box-shadow: inset 16px -16px 0 0 var(--toggle-color);
            transform: scale(1) rotate(-2deg);
            transition: box-shadow .5s ease 0s, transform .4s ease .1s;
        }

        .toggle input + div:before {
            content: '';
            width: inherit;
            height: inherit;
            border-radius: inherit;
            position: absolute;
            left: 0;
            top: 0;
            background: light-dark(transparent, var(--toggle-color));
            transition: background .3s ease;
        }

        .toggle input + div:after {
            content: '';
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: -4px 0 0 -4px;
            position: absolute;
            top: 50%;
            left: 50%;
            box-shadow: 
                0 -23px 0 var(--toggle-color),
                0 23px 0 var(--toggle-color),
                23px 0 0 var(--toggle-color),
                -23px 0 0 var(--toggle-color),
                15px 15px 0 var(--toggle-color),
                -15px 15px 0 var(--toggle-color),
                15px -15px 0 var(--toggle-color),
                -15px -15px 0 var(--toggle-color);
            transform: scale(0);
            transition: all .3s ease;
        }

        .toggle input:checked + div {
            box-shadow: inset 32px -32px 0 0 var(--background-color);
            transform: scale(.5) rotate(0deg);
            transition: transform .3s ease .1s, box-shadow .2s ease 0s;
        }

        .toggle input:checked + div:before {
            background: var(--toggle-color);
            transition: background .3s ease .1s;
        }

        .toggle input:checked + div:after {
            transform: scale(1.5);
            transition: transform .5s ease .15s;
        }

        @keyframes reveal-in {
            from { clip-path: circle(0% at var(--x) var(--y)); }
            to { clip-path: circle(150% at var(--x) var(--y)); }
        }

        @keyframes reveal-out {
            from { clip-path: circle(150% at var(--x) var(--y)); }
            to { clip-path: circle(0% at var(--x) var(--y)); }
        }

        ::view-transition-new(root) {
            animation: reveal-in 0.5s ease-in-out forwards;
            z-index: 1;
            mix-blend-mode: normal;
        }

        ::view-transition-old(root) {
            animation: reveal-out 0.5s ease-in-out forwards;
            animation-delay: .5s;
            z-index: 0;
            mix-blend-mode: normal;
        }

        ::view-transition-image-pair(root) {
            isolation: isolate;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Typing Speed Tester</h1>
        <div class="controls">
            <div class="mode-toggle">
                <button class="mode-btn active" onclick="setMode('paragraph')" aria-label="Switch to full paragraph mode">Full Paragraph</button>
                <button class="mode-btn" onclick="setMode('timed')" aria-label="Switch to 60-second timed mode">60s Timed</button>
                <label class="toggle" aria-label="Toggle dark mode">
                    <input type="checkbox" />
                    <div></div>
                </label>
            </div>
            <div class="text-mode-toggle">
                <button class="text-mode-btn active" onclick="setTextMode('random')" aria-label="Use random paragraph">Random Paragraph</button>
                <button class="text-mode-btn" onclick="setTextMode('custom')" aria-label="Use custom text">Custom Text</button>
            </div>
            <div class="custom-text-form" id="custom-text-form">
                <textarea id="custom-text-input" class="custom-text-input" placeholder="Enter your custom text here..." aria-label="Custom text input"></textarea>
                <button class="custom-text-submit" onclick="submitCustomText()" aria-label="Submit custom text">Submit</button>
            </div>
        </div>
        <div id="paragraph" class="paragraph" role="region" aria-label="Text to type" aria-live="polite"></div>
        <textarea id="input" class="input-area" placeholder="Start typing here..." aria-label="Typing input area"></textarea>
        <div class="progress-bar">
            <div id="progress" class="progress"></div>
        </div>
        <div id="feedback" class="feedback" role="alert"></div>
        <div id="mistakes" class="mistakes" role="alert"></div>
        <div class="stats">
            <div class="stat">Time: <span id="time">0</span>s</div>
            <div class="stat">WPM: <span id="wpm">0</span></div>
            <div class="stat">CPM: <span id="cpm">0</span></div>
            <div class="stat">Accuracy: <span id="accuracy">100</span>%</div>
            <div class="stat">Mistakes: <span id="mistake-count">0</span></div>
            <div class="stat">Backspaces: <span id="backspace-count">0</span></div>
        </div>
        <button id="pause-btn" class="pause-btn" onclick="togglePause()" aria-label="Pause test" style="display: none;">Pause</button>
        <button class="reset-btn" onclick="resetTest()" aria-label="Reset test">Reset Test</button>
    </div>

    <script>
        const paragraphs = [
            "The quick brown fox jumps over the lazy dog. This is a simple sentence used to test typing speed.",
            "Typing is a skill that improves with practice. Consistency is key to mastering it.",
            "In the quiet forest, the wind whispers through the trees, creating a peaceful melody.",
            "Technology advances rapidly, transforming the way we live and work every day.",
            "A journey of a thousand miles begins with a single step, taken with courage.",
            "The sun sets slowly behind the mountain, casting a warm golden glow over the calm valley. Birds chirp softly, and a gentle breeze rustles the leaves. Nature's beauty unfolds in quiet moments like these, inviting us to pause and appreciate the world around us.",
            "Learning to code opens doors to endless possibilities. From building apps to analyzing data, programming empowers creativity and problem-solving. With practice, anyone can master the logic and structure of code, turning ideas into reality one line at a time.",
            "A small boat drifts on a serene lake, its oars dipping gently into the water. The ripples spread outward, catching the light of the morning sun. For the rower, this peaceful journey is a moment of clarity amidst life's constant motion.",
            "Books transport us to new worlds, where imagination knows no bounds. Each page holds adventure, wisdom, or mystery, waiting to be explored. Reading not only entertains but also deepens our understanding of others, connecting us across time and space.",
            "In a bustling city, people rush through crowded streets, each with their own story. Skyscrapers tower above, reflecting ambition and progress. Amid the chaos, a street musician's melody offers a brief reminder of the beauty in everyday life.",
            "Gardening is a labor of love that rewards patience. Planting seeds, tending soil, and watching sprouts emerge connect us to the earth. Each bloom tells a story of care, reminding us that growth takes time and dedication.",
            "Stars twinkle in the night sky, a vast canvas of cosmic wonder. Gazing upward, we ponder our place in the universe. The constellations inspire dreams and curiosity, urging us to explore the mysteries beyond our world.",
            "A warm cup of tea soothes the soul on a chilly morning. Its steam rises, carrying the aroma of herbs and spices. In that quiet moment, worries fade, and the simple joy of a hot drink brings comfort and calm.",
            "Music has the power to uplift and unite. Whether it's a lively beat or a soulful ballad, melodies stir emotions and create memories. Playing an instrument or singing along fosters creativity and connects us to others.",
            "The old lighthouse stands firm against crashing waves, guiding ships safely to shore. Its beacon cuts through fog and darkness, a symbol of hope and reliability. For sailors, it's a trusted friend in the vast ocean.",
            "Walking through a forest, the scent of pine fills the air. Sunlight filters through the canopy, dappling the path ahead. Each step feels like a journey into nature's heart, where peace and discovery await.",
            "Writing is a craft that shapes thoughts into words. A single sentence can inspire, inform, or entertain. With practice, writers hone their voice, weaving stories or ideas that resonate with readers around the globe.",
            "The marketplace buzzes with energy as vendors call out their wares. Fresh fruits, handmade crafts, and spices fill the stalls. Shoppers weave through, their laughter and chatter creating a vibrant tapestry of community.",
            "A child's laughter echoes in the park as they chase a colorful kite. The wind carries it higher, dancing against a backdrop of blue sky. In these carefree moments, joy is simple and boundless.",
            "History teaches us lessons from the past, shaping our present and future. Ancient ruins, old letters, and timeless stories reveal human triumphs and struggles. By studying history, we honor those who came before us.",
            "A gentle rain taps on the window, creating a soothing rhythm. Outside, the world slows down, wrapped in a misty calm. Inside, it's the perfect moment to curl up with a book and let time slip away.",
            "Cooking brings people together, blending flavors and traditions. From chopping vegetables to sharing a meal, every step is a chance to create and connect. A homemade dish carries love in every bite.",
            "The desert stretches endlessly under a blazing sun, yet life thrives in its harsh beauty. Cacti stand tall, and creatures adapt to survive. The desert teaches resilience and the art of finding strength in adversity.",
            "A painter's brush dances across the canvas, blending colors into life. Each stroke captures emotion, telling a story without words. Art transforms the ordinary, inviting us to see the world through new eyes.",
            "The train whistles as it winds through rolling hills, carrying passengers to new destinations. Windows frame fleeting views of fields and towns, sparking dreams of adventure and discovery.",
            "Meditation quiets the mind, grounding us in the present. With each breath, stress fades, and clarity emerges. Even a few moments of stillness can recharge us for the journey ahead.",
            "A cozy library invites exploration, its shelves lined with stories and knowledge. The scent of old books fills the air, promising hours of discovery. Here, every reader finds a home.",
            "The ocean waves crash against the shore, a timeless symphony of power and grace. Seashells scatter the sand, treasures of the deep. The sea reminds us of nature's vast, untamed beauty.",
            "Photography freezes moments in time, capturing joy, sorrow, or wonder. A single image can tell a story or spark a memory, preserving life's fleeting beauty for years to come.",
            "A campfire crackles under a starry sky, its warmth drawing friends closer. Stories and laughter fill the night, creating bonds that linger long after the flames fade.",
            "Mathematics unlocks the universe's secrets, from orbits to algorithms. Its logic builds bridges and fuels innovation. Solving a problem feels like discovering a hidden truth.",
            "A bicycle glides down a quiet path, the rider feeling the rush of freedom. Pedaling through parks or city streets, every ride is a small adventure, powered by effort and joy.",
            "Theater brings stories to life, with actors weaving magic on stage. From comedy to tragedy, each performance stirs emotions, connecting audiences to the human experience.",
            "A scientist peers through a microscope, uncovering life's tiny mysteries. Each discovery, no matter how small, pushes the boundaries of what we believe is possible.",
            "The autumn leaves fall gently, painting the ground in red and gold. Crisp air carries the promise of change, inviting reflection as the seasons shift.",
            "Volunteering builds communities, one act of kindness at a time. Whether planting trees or helping neighbors, giving back creates ripples of hope and connection.",
            "A chessboard sits ready, its pieces poised for battle. Each move demands strategy and foresight, turning a simple game into a dance of minds."
        ];

        const paragraphEl = document.getElementById('paragraph');
        const inputEl = document.getElementById('input');
        const timeEl = document.getElementById('time');
        const wpmEl = document.getElementById('wpm');
        const cpmEl = document.getElementById('cpm');
        const accuracyEl = document.getElementById('accuracy');
        const mistakeCountEl = document.getElementById('mistake-count');
        const backspaceCountEl = document.getElementById('backspace-count');
        const feedbackEl = document.getElementById('feedback');
        const mistakesEl = document.getElementById('mistakes');
        const progressEl = document.getElementById('progress');
        const pauseBtn = document.getElementById('pause-btn');
        const customTextForm = document.getElementById('custom-text-form');
        const customTextInput = document.getElementById('custom-text-input');

        let currentParagraph = '';
        let customText = '';
        let startTime = null;
        let timerInterval = null;
        let totalChars = 0;
        let correctChars = 0;
        let testEnded = false;
        let mode = 'paragraph';
        let textMode = 'random';
        let errorMap = {};
        let isPaused = false;
        let pauseStart = null;
        let backspaceCount = 0;
        let lastInputTime = 0;
        const debounceDelay = 50;

        function getRandomParagraph() {
            return paragraphs[Math.floor(Math.random() * paragraphs.length)];
        }

        function displayParagraph() {
            if (textMode === 'custom' && customText) {
                currentParagraph = customText;
            } else {
                currentParagraph = getRandomParagraph();
            }
            paragraphEl.innerHTML = currentParagraph.split('').map(char => `<span>${char}</span>`).join('');
            paragraphEl.focus();
        }

        function startTimer() {
            if (!startTime && !testEnded && !isPaused && !timerInterval) {
                startTime = new Date();
                timerInterval = setInterval(updateStats, 1000);
                if (mode === 'paragraph') {
                    pauseBtn.style.display = 'inline-block';
                    pauseBtn.disabled = false;
                }
            }
        }

        function setMode(newMode) {
            mode = newMode;
            timeEl.textContent = newMode === 'timed' ? '60' : '0';
            document.querySelectorAll('.mode-btn').forEach(btn => {
                btn.classList.toggle('active', btn.textContent.includes(newMode === 'paragraph' ? 'Paragraph' : 'Timed'));
            });
            resetTest();
        }

        function setTextMode(newTextMode) {
            textMode = newTextMode;
            document.querySelectorAll('.text-mode-btn').forEach(btn => {
                btn.classList.toggle('active', btn.textContent.includes(newTextMode === 'random' ? 'Random' : 'Custom'));
            });
            customTextForm.classList.toggle('active', newTextMode === 'custom');
            if (newTextMode === 'custom') {
                customTextInput.focus();
            }
            resetTest();
        }

        function submitCustomText() {
            const text = customTextInput.value.trim();
            if (!text) {
                alert('Please enter some text to use for the typing test.');
                return;
            }
            customText = text;
            customTextInput.value = '';
            resetTest();
        }

        function togglePause() {
            if (mode !== 'paragraph' || testEnded || !startTime) return;
            isPaused = !isPaused;
            pauseBtn.textContent = isPaused ? 'Resume' : 'Pause';
            pauseBtn.classList.toggle('paused', isPaused);
            pauseBtn.setAttribute('aria-label', isPaused ? 'Resume test' : 'Pause test');
            if (isPaused) {
                clearInterval(timerInterval);
                timerInterval = null;
                pauseStart = new Date();
                inputEl.disabled = true;
                inputEl.setAttribute('aria-disabled', 'true');
            } else {
                inputEl.disabled = false;
                inputEl.setAttribute('aria-disabled', 'false');
                inputEl.focus();
                startTime = new Date(new Date() - (pauseStart - startTime));
                timerInterval = setInterval(updateStats, 1000);
            }
        }

        function analyzeMistakes() {
            const text = inputEl.value;
            errorMap = {};
            for (let i = 0; i < text.length && i < currentParagraph.length; i++) {
                if (text[i] !== currentParagraph[i]) {
                    const expected = currentParagraph[i] === ' ' ? 'space' : currentParagraph[i];
                    const typed = text[i] === ' ' ? 'space' : text[i];
                    const key = `Expected "${expected}" but typed "${typed}"`;
                    errorMap[key] = (errorMap[key] || 0) + 1;
                }
            }
            const errorList = Object.entries(errorMap)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 3)
                .map(([error, count]) => `${error} (${count} time${count > 1 ? 's' : ''})`);
            return errorList.length > 0 ? `Frequent mistakes: ${errorList.join(', ')}` : 'No mistakes! Perfect typing!';
        }

        function updateStats() {
            if (testEnded || isPaused) return;

            const text = inputEl.value;
            const currentTime = new Date();
            const elapsedTime = (currentTime - startTime) / 1000;
            timeEl.textContent = mode === 'timed' ? Math.max(0, 60 - Math.floor(elapsedTime)) : Math.floor(elapsedTime);

            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            const wpm = elapsedTime > 0 ? Math.round((words.length / elapsedTime) * 60) : 0;
            const cpm = elapsedTime > 0 ? Math.round((text.length / elapsedTime) * 60) : 0;

            wpmEl.textContent = wpm;
            cpmEl.textContent = cpm;

            totalChars = text.length;
            correctChars = 0;
            let mistakes = 0;
            for (let i = 0; i < text.length; i++) {
                if (i < currentParagraph.length) {
                    if (text[i] === currentParagraph[i]) {
                        correctChars++;
                    } else {
                        mistakes++;
                    }
                } else if (mode === 'paragraph') {
                    mistakes++;
                }
            }
            const accuracy = totalChars > 0 ? ((correctChars / totalChars) * 100).toFixed(1) : 100;
            accuracyEl.textContent = accuracy;
            mistakeCountEl.textContent = mistakes;
            backspaceCountEl.textContent = backspaceCount;

            const progressPercent = Math.min((text.length / currentParagraph.length) * 100, 100);
            progressEl.style.width = `${progressPercent}%`;

            const spans = paragraphEl.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.className = '';
                if (index < text.length && index < currentParagraph.length) {
                    span.className = text[index] === currentParagraph[index] ? 'correct' : 'incorrect';
                } else if (index < currentParagraph.length && text.length > currentParagraph.length && mode === 'paragraph') {
                    span.className = 'incorrect';
                }
                if (index === text.length && !testEnded && index < currentParagraph.length) {
                    span.className = 'current';
                }
            });

            if (mode === 'timed' && text === currentParagraph) {
                clearInterval(timerInterval);
                timerInterval = null;
                inputEl.disabled = true;
                inputEl.setAttribute('aria-disabled', 'true');
                testEnded = true;
                spans.forEach(span => span.className = 'correct');
                feedbackEl.textContent = '';
                mistakesEl.textContent = '';
                feedbackEl.textContent = wpm >= 60 ? "Great job! You're a typing pro!" :
                                        wpm >= 40 ? "Good work! Keep practicing!" :
                                        "Nice try! Practice makes perfect!";
                mistakesEl.textContent = analyzeMistakes();
                return;
            }

            if (mode === 'paragraph' && text === currentParagraph) {
                clearInterval(timerInterval);
                timerInterval = null;
                inputEl.disabled = true;
                inputEl.setAttribute('aria-disabled', 'true');
                testEnded = true;
                pauseBtn.style.display = 'none';
                spans.forEach(span => span.className = 'correct');
                feedbackEl.textContent = '';
                mistakesEl.textContent = '';
                feedbackEl.textContent = wpm >= 60 ? "Great job! You're a typing pro!" :
                                        wpm >= 40 ? "Good work! Keep practicing!" :
                                        "Nice try! Practice makes perfect!";
                mistakesEl.textContent = analyzeMistakes();
            } else if (mode === 'timed' && elapsedTime >= 60) {
                clearInterval(timerInterval);
                timerInterval = null;
                testEnded = true;
                const text = inputEl.value;
                const currentTime = new Date();
                const elapsedTime = (currentTime - startTime) / 1000;
                timeEl.textContent = '0';

                const words = text.trim().split(/\s+/).filter(word => word.length > 0);
                const wpm = elapsedTime > 0 ? Math.round((words.length / elapsedTime) * 60) : 0;
                const cpm = elapsedTime > 0 ? Math.round((text.length / elapsedTime) * 60) : 0;

                wpmEl.textContent = wpm;
                cpmEl.textContent = cpm;

                totalChars = text.length;
                correctChars = 0;
                let mistakes = 0;
                for (let i = 0; i < text.length; i++) {
                    if (i < currentParagraph.length) {
                        if (text[i] === currentParagraph[i]) {
                            correctChars++;
                        } else {
                            mistakes++;
                        }
                    }
                }
                const accuracy = totalChars > 0 ? ((correctChars / totalChars) * 100).toFixed(1) : 100;
                accuracyEl.textContent = accuracy;
                mistakeCountEl.textContent = mistakes;
                backspaceCountEl.textContent = backspaceCount;

                const progressPercent = Math.min((text.length / currentParagraph.length) * 100, 100);
                progressEl.style.width = `${progressPercent}%`;

                spans.forEach(span => span.classList.remove('current'));
                inputEl.disabled = true;
                inputEl.setAttribute('aria-disabled', 'true');
                feedbackEl.textContent = '';
                mistakesEl.textContent = '';

                let feedbackMessage = wpm >= 60 ? "Great job! You're a typing pro!" :
                                     wpm >= 40 ? "Good work! Keep practicing!" :
                                     "Nice try! Practice makes perfect!";
                if (text !== currentParagraph) {
                    const typedChars = Math.min(text.length, currentParagraph.length);
                    const remainingPercent = ((currentParagraph.length - typedChars) / currentParagraph.length) * 100;
                    feedbackMessage += ` ${remainingPercent.toFixed(0)}% of the paragraph remains to be typed.`;
                }
                feedbackEl.textContent = feedbackMessage;
                mistakesEl.textContent = analyzeMistakes();
            }
        }

        function resetTest() {
            clearInterval(timerInterval);
            timerInterval = null;
            startTime = null;
            totalChars = 0;
            correctChars = 0;
            testEnded = false;
            errorMap = {};
            isPaused = false;
            backspaceCount = 0;

            inputEl.value = '';
            inputEl.disabled = false;
            inputEl.setAttribute('aria-disabled', 'false');
            timeEl.textContent = mode === 'timed' ? '60' : '0';
            wpmEl.textContent = '0';
            cpmEl.textContent = '0';
            accuracyEl.textContent = '100';
            mistakeCountEl.textContent = '0';
            backspaceCountEl.textContent = '0';
            feedbackEl.textContent = '';
            mistakesEl.textContent = '';
            progressEl.style.width = '0%';
            pauseBtn.style.display = 'none';
            pauseBtn.textContent = 'Pause';
            pauseBtn.classList.remove('paused');
            pauseBtn.setAttribute('aria-label', 'Pause test');
            pauseBtn.disabled = true;

            displayParagraph();
            if (mode === 'timed') startTimer();
            inputEl.focus();
        }

        let debounceTimeout = null;
        function debounceUpdateStats() {
            const now = Date.now();
            if (now - lastInputTime >= debounceDelay) {
                updateStats();
                lastInputTime = now;
            } else {
                clearTimeout(debounceTimeout);
                debounceTimeout = setTimeout(() => {
                    updateStats();
                    lastInputTime = Date.now();
                }, debounceDelay);
            }
        }

        inputEl.addEventListener('input', () => {
            startTimer();
            debounceUpdateStats();
        });

        inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !testEnded && !isPaused) {
                backspaceCount++;
                backspaceCountEl.textContent = backspaceCount;
            }
        });

        document.addEventListener('DOMContentLoaded', () => {
            const toggleInput = document.querySelector('.toggle input');
            const rootElement = document.documentElement;

            const applyTheme = (isDark) => {
                if (isDark) {
                    rootElement.classList.add('dark');
                } else {
                    rootElement.classList.remove('dark');
                }
            };

            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            toggleInput.checked = prefersDark;
            applyTheme(prefersDark);

            toggleInput.addEventListener('input', () => {
                const isDark = toggleInput.checked;

                let x = window.innerWidth / 2;
                let y = window.innerHeight / 2;

                const toggleElement = document.querySelector('.toggle');
                if (toggleElement) {
                    const rect = toggleElement.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        x = rect.left + rect.width / 2;
                        y = rect.top + rect.height / 2;
                    }
                }

                if (!document.startViewTransition) {
                    applyTheme(isDark);
                    return;
                }

                const transition = document.startViewTransition(() => {
                    applyTheme(isDark);
                });

                transition.ready.then(() => {
                    rootElement.style.setProperty('--x', `${x}px`);
                    rootElement.style.setProperty('--y', `${y}px`);
                }).catch(error => {
                    console.error("Error during View Transition setup:", error);
                });

                transition.finished.catch(error => {
                    console.error("Error during View Transition finish:", error);
                });
            });

            pauseBtn.style.display = 'none';
            pauseBtn.disabled = true;
            displayParagraph();
            timeEl.textContent = mode === 'timed' ? '60' : '0';
            if (mode === 'timed') startTimer();
            inputEl.focus();

            paragraphEl.setAttribute('tabindex', '-1');
            inputEl.addEventListener('focus', () => {
                paragraphEl.focus();
                inputEl.focus();
            });
        });
    </script>
</body>
</html>
```
