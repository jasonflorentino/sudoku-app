# 🧩 A Sudoku App
#### I recently implemented a function to [solve a sudoku game](https://github.com/jasonflorentino/algorithms-dataStructures/tree/main/sudoku). Figured I'd combine that with the next couple things I've been wanting to try: [Tailwind](https://tailwindcss.com/) and [Recoil](https://recoiljs.org/).

Wasn't really sure where this was going when I started, it's kind of just for learning/fun. But as of Dec 2021, I added an 'auto-solve' feature that solves the current state of the board and that feels complete enough to me! Going to spend some time pondering my Tailwind and Recoil experiences. First impression on Tailwind is alright. Might try it again, try a few more things differently. Recoil was very cool. Feel like there were definitely some very wrong things I did here, but I'm starting to feel more familiar with the APIs so I'm very excited to try it again in the future.

## Details
- Bootstrapped with plain JS CRA
- Did some Tailwind and Recoil first
- Converted to TypeScript after
- Seemed to be some dependency issues that popped up during TypeScript migration, but it worked after installing deps with `--legacy-peer-deps` flag. 

## Run Locally
*You'll need node/npm and a web browser*
- Download or clone this repo to your machine
- Install dependencies
  ```
  npm i
  # or you might need:
  npm i --legacy-peer-deps
  ```
- Start it up
  ```
  npm start
  ```

## Tasks:
💭 Host live deployment on Netlify or something  
💭 Change number from the Control pane  
✅ Click button to auto solve puzzle  
✅ Can't lock an empty number box  
✅ Different colors for different box states: Focus, Empty, Locked, Highlighted  
✅ Lock and Unlock a box from being changed  
✅ Add control pane for other actions on a selected box  
✅ UI feedback for if board is solved or not  
✅ Dark mode  
✅ Add Typescript  
✅ Able to change each number in the grid  
✅ Display the board on a grid  

## Gallery
![Screenshot of the app in dark mode](https://github.com/jasonflorentino/sudoku-app/blob/main/demo/screenshot-dark.png)
![Screenshot of the app in light mode](https://github.com/jasonflorentino/sudoku-app/blob/main/demo/screenshot-light.png)
