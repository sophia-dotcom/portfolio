const boxes = document.querySelector(".boxes");
const aboutme = document.querySelector("#aboutme");

boxes.addEventListener(
  "click",
  (someFunc = (e) => {
    console.log(e.target);

    if (e.target.id === "box-1") {
      aboutme.innerHTML =
        "<p>I researched crypto and NFT content on YouTube, tiktok and Twitter and published TikToks based on my research. The Tik Toks performed quite well and in 3 months, Tiktok follower growth hit 1,000 followers, with TikToks having an average 3,000-5,000 views.<br/><br/> <a href='https://www.tiktok.com/@coinstore_global/video/7034423185898573057' target='_blank'>Example</a> <br/> <br/>  Researched trends within the crypto space to create TikToks which received thousands of views within 2-3 days - with no paid advertising, purely on organic followers</p>";
    } else if (e.target.id === "box-2") {
      aboutme.innerHTML =
        "<p>These are some graphics that I created for a company’s Twitter, Medium and Facebook. They are meant for informing followers of news. The aesthetic and needs to be in line with the company’s branding. </p><img width='300px' src='idm.png'> <img width='300px' src='microverse.png'> <p>I designed some graphics to be posted on Facebook, LinkedIn and Instagram for a company. This is to portray the brand’s image and give the company a personality that people can relate to.</p> <img width='300px' src='texting.png'> <img width='300px' src='macbook.png'>";
    } else if (e.target.id === "box-3") {
      aboutme.innerHTML =
        "<h4>Bugsweeper</h4><p>Are you afraid of bugs? I coded a simple game based on Minesweeper to help myself overcome my fear of bugs in programming :O ... so scary!<br /><br /><a href='https://bugsweeeper.netlify.app/' target='_blank'>Click to Play</a></p>";
    }
  })
);
