const aboutme = document.querySelector("#aboutme");
const bg = document.querySelector(".bg");
const boxdiv = document.querySelector(".boxdiv");
const mainphoto = document.querySelector(".mainphoto");
const ghost = document.querySelector(".ghost");

bg.addEventListener("mouseover", function (e) {
  // console.log("mouseover");
  // console.log(e.target);

  boxdiv.innerHTML =
    "<div class='newdiv'><div id='box-1' style='background-color: rgba(222, 217, 82, 0.8); border-radius:3px; width: 75px; position: relative; top: -270px; left: 220px; z-index: 2'><h4 id='box-1-text' style='padding: 4px' >Tik Tok</h4></div><div id='box-2' style='background-color: rgba(222, 217, 82, 0.8); border-radius:3px; width: 75px; position: relative;top: -320px;left: 40px;z-index: 3;'><h4 id='box-2-text' style='padding: 3px' >Graphic Design</h4></div><div id='box-3' style='background-color: rgba(222, 217, 82, 0.8); border-radius:3px; width: 75px;position: relative;top: -200px;left: 120px;z-index: 3;'><h4 id='box-3-text' style='padding: 5px; color:rgb(0,0,0);'>More</h4></div></div><div id='box-4' style='background-color: rgba(222, 217, 82, 0.8); border-radius:3px; width: 75px;position: relative;top: -330px;left: 150px;z-index: 4;'><h4 id='box-4-text' style='padding: 5px; color:rgb(0,0,0);'>Writing</h4></div></div>";

  // const box1 = document.querySelector("#box-1");
  // const box2 = document.querySelector("#box-2");
  // const box3 = document.querySelector("#box-3");

  boxdiv.addEventListener("mouseover", function (e) {
    //   if (e.target.id === "box-1") {
    //     box1.style.backgroundColor = "rgba(222, 217, 82, 0.8)";
    //     box1.innerHTML = "<h4 id='box-1-text' style='padding: 4px' >Tik Tok</h4>";
    //   } else if (e.target.id === "box-2") {
    //     box2.style.backgroundColor = "rgba(222, 217, 82, 0.8)";
    //     box2.innerHTML =
    //       "<h4 id='box-2-text' style='padding: 3px' >Graphic Design</h4>";
    //   } else if (e.target.id === "box-3") {
    //     box3.style.backgroundColor = "rgba(222, 217, 82, 0.8)";
    //     box3.innerHTML =
    //       "<h4 id='box-3-text' style='padding: 5px; padding-top: 50px;color:rgb(0,0,0);'>More</h4>";
    //   }
    boxdiv.addEventListener("click", function (e) {
      // console.log(e.target);
      if (e.target.id === "box-1" || e.target.id === "box-1-text") {
        aboutme.innerHTML =
          "<h4>Tik Tok</h4><p>I researched crypto and NFT content on YouTube, tiktok and Twitter and published TikToks based on my research. The Tik Toks performed quite well and in 3 months, Tiktok follower growth hit 1,000 followers, with TikToks having an average 3,000-5,000 views.<br/><br/> Example:<br/><br/><img src='tiktokeg.png' width='150px' style='margin-left: 32.5%;'></p>";
      } else if (e.target.id === "box-2" || e.target.id === "box-2-text") {
        aboutme.innerHTML =
          "<h4>Graphic Design</h4><p>These are some graphics that I created for a company’s Twitter, Medium and Facebook. They are meant for informing followers of news. The aesthetic and needs to be in line with the company’s branding. </p><img width='300px' src='idm.png'> <img width='300px' src='microverse.png'> <p>I designed some graphics to be posted on Facebook, LinkedIn and Instagram for a company. This is to portray the brand’s image and give the company a personality that people can relate to.</p> <img width='300px' src='texting.png'> <img width='300px' src='macbook.png'>";
      } else if (e.target.id === "box-3" || e.target.id === "box-3-text") {
        aboutme.innerHTML =
          "<h4>Bugsweeper</h4><p>Are you afraid of bugs? I coded a simple game based on Minesweeper to help myself overcome my fear of bugs in programming :O ... so scary!<br /><br /><a href='https://bugsweeeper.netlify.app/' target='_blank'>Click to Play</a></p>";
      } else if (e.target.id === "box-4" || e.target.id === "box-4-text") {
        aboutme.innerHTML =
          "<h4>Writing</h4><p>I have written a few articles on Medium ranging from informative to persuasive writing. I also had to translate the given information from Mandarin to English.<br /><br /><img src='medium1.png' style='width: 600px'><br><img src='medium2.png' style='width: 600px'><br><a href='https://medium.com/coinstore-exchange/winners-awarded-50-000-usdt-future-bonus-is-up-for-grabs-in-coinstores-demo-trading-contest-4111821f56f8' target='_blank'>Source</a></p>";
      }
    });
  });

  ghost.addEventListener("mouseleave", function () {
    // console.log("mouseleave");
    boxdiv.innerHTML = "";
  });
});
