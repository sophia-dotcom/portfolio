const aboutme = document.querySelector("#aboutme");
const bg = document.querySelector(".bg");
const boxdiv = document.querySelector(".boxdiv");
const mainphoto = document.querySelector(".mainphoto");
const ghost = document.querySelector(".ghost");

bg.addEventListener("mouseover", function (e) {
  console.log("mouseover");
  console.log(e.target);
  const newdiv = document.createElement("div");
  boxdiv.innerHTML =
    "<div class='newdiv'><div id='box-1' style='width: 75px; height: 75px; position: relative; top: -270px; left: 220px; z-index: 2; background-color: rgba(0, 0, 0, 0.3);'><h4  style='padding-left: 5px'>Tik Tok</h4></div><div id='box-2' style=' width: 75px;height: 75px; position: relative;top: -345px;left: 30px;z-index: 3;background-color: rgba(0, 0, 0, 0.3);'> <h4 id='box-2' style='padding-left: 3px'>Graphic Design</h4></div><div id='box-3' style='width: 75px;height: 75px;position: relative;top: -320px;left: 115px;z-index: 3;background-color: rgba(0, 0, 0, 0.3);'><h4 id='box-3' style='padding-top: 50px; padding-left: 5px'>More</h4></div></div>";

  boxdiv.addEventListener("click", function (e) {
    if (e.target.id === "box-1") {
      aboutme.innerHTML =
        "<h4>Tik Tok</h4><p>I researched crypto and NFT content on YouTube, tiktok and Twitter and published TikToks based on my research. The Tik Toks performed quite well and in 3 months, Tiktok follower growth hit 1,000 followers, with TikToks having an average 3,000-5,000 views.<br/><br/> <a href='https://www.tiktok.com/@coinstore_global/video/7034423185898573057' target='_blank'>Example:<br/><br/><img src='tiktokeg.png' width='300px'></a> </p>";
    } else if (e.target.id === "box-2") {
      aboutme.innerHTML =
        "<h4>Graphic Design</h4><p>These are some graphics that I created for a company’s Twitter, Medium and Facebook. They are meant for informing followers of news. The aesthetic and needs to be in line with the company’s branding. </p><img width='300px' src='idm.png'> <img width='300px' src='microverse.png'> <p>I designed some graphics to be posted on Facebook, LinkedIn and Instagram for a company. This is to portray the brand’s image and give the company a personality that people can relate to.</p> <img width='300px' src='texting.png'> <img width='300px' src='macbook.png'>";
    } else if (e.target.id === "box-3") {
      aboutme.innerHTML =
        "<h4>Bugsweeper</h4><p>Are you afraid of bugs? I coded a simple game based on Minesweeper to help myself overcome my fear of bugs in programming :O ... so scary!<br /><br /><a href='https://bugsweeeper.netlify.app/' target='_blank'>Click to Play</a></p>";
    }
  });

  ghost.addEventListener("mouseleave", function () {
    console.log("mouseleave");
    boxdiv.innerHTML = "";
  });
});
