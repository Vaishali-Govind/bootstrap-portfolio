var data =  {
  "id": "17",
  "companyname": "flipkart ",
  "companywebsite": "flipkart.in",
  "companydescription": "Online Wenstore",
  "dateofinception": "2019-02-01",
  "cinnumber": "14854587",
  "uamnumber": "232656",
  "address": "Delhi",
  "founder": "[\"Kalyan Krisnamurthy\",\"KK\"]",
  "contactperson": "KK",
  "contactnumber": "[\"1800457870\"]",
  "sdg": "[\"1\",\"2\",\"3\",\"3\",\"3\",\"3\"]",
  "projects" : [{ 'name': 'WALMART-1',
                     'video': 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
                     'image':'http://pluspng.com/img-png/logo-flipkart-png-flipkart-logo-vector-300.png',
                     'report':'http://site_url/media/preport/filename',
                    'description':'PROJECT-1'
                     },
                    { 'name': 'WALMART-2',
                     'video': 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
                     'image':'http://pluspng.com/img-png/logo-flipkart-png-icon-3-jpg-png-256.png',
                     'report':'http://site_url/media/preport/filename',
                     'description':'PROJECT-2'
                    },
                   { 'name': 'WALMART-3',
                     'video': 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
                     'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdhXWew1I-n09qhD_mAjINPRxqVFH98B2hpouT2R5h-sHPukDYA',
                     'report':'http://site_url/media/preport/filename',
                     'description':'PROJECT-3'
                    }],
  
  "companyawards": "accolades 1000",
  "membership": "premium"
  }
  

  


    
      var x = document.getElementById("about").innerText;
      document.getElementById("demo").innerHTML = data.companyname;
      document.getElementById("demo1").innerHTML = data.companywebsite;
      document.getElementById("demo2").innerHTML = data.companydescription;
      document.getElementById("demo3").innerHTML = data.dateofinception;
      document.getElementById("demo4").innerHTML = data.cinnumber;
      document.getElementById("demo5").innerHTML = data.address;
      // document.getElementById("demo6").innerHTML = data.address;
    
  
    // function myAwards(){
    //   var y = document.getElementById("award").innerText;
    //   document.getElementById("award1").innerHTML = data.companyawards;
   
    // }

    document.getElementById("award").innerHTML = data.companyawards;
    document.getElementById("mem").innerHTML = data.membership;
     
    
    const fonderDiv = document.getElementById("experience").innerText;
     
      const founderh2 =document.getElementById("exp1");
      const founder = data.founder.replace(/\[|\]|\"/g, "").split(",");
      founder.map(founder => {
        founderh2.innerHTML = (founderh2.innerText ? founderh2.innerText+" , " : "") + founder;
      })
    
      document.getElementById("exp2").innerHTML = data.contactperson;
      document.getElementById("exp4").innerHTML = data.address;

      const contactNum =document.getElementById("exp3");
      const contactnumber = data.contactnumber.replace(/\[|\]|\"/g, "").split(",");
      contactnumber.map(contactnumber => {
        contactNum.innerHTML = (contactNum.innerText ? contactNum.innerText+" , " : "") + contactnumber;
      })


      const sdgDetail =document.getElementById("sdg");
      const sdg = data.sdg.replace(/\[|\]|\"/gi, "").split(",");
      sdg.map(sdg => {
        sdgDetail.innerHTML = (sdgDetail.innerText ? sdgDetail.innerText+" , " : "") + sdg;
      })

    
      const video = document.querySelectorAll("video");

      for(var i; i< data.projects.length; i++){
                
          video[i].src = data.projects[i].video;

      }


      const container = document.querySelector(".container");

      for(i =0; i<data.projects.length;i++) {

        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        container.appendChild(card);
        const image = document.createElement("img");
        card.appendChild(image);
        image.className = "card-img-top";
        image.src = data.projects[i].image;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        const pTag = document.createElement("p");
        pTag.className = "card-text";

        pTag.innerText= data.projects[i].description;
        cardBody.appendChild(pTag);
      }

      
      const container1 = document.querySelector(".container1");

      for(i =0; i<data.projects.length;i++) {

        const card = document.createElement("div");
        card.className = "embed-responsive embed-responsive-21by9";
        card.style.width = "18rem";
        container1.appendChild(card);
        const image = document.createElement("iframe");
        card.appendChild(image);
        image.className = "embed-responsive-item";
        image.src = data.projects[i].video;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        const pTag = document.createElement("p");
        pTag.className = "card-text";

        pTag.innerText= data.projects[i].description;
        cardBody.appendChild(pTag);
      }

      const container2 = document.querySelector(".container2");

      for(i =0; i<data.projects.length;i++) {

        const card = document.createElement("div");
        card.className = "page-header";
        card.style.width = "18rem";
        container2.appendChild(card);
        const image = document.createElement("p");
        card.appendChild(image);
        image.className = "h1";
        image.src = data.projects[i].name;
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);
        const pTag = document.createElement("p");
        pTag.className = "card-text";

        pTag.innerText= data.projects[i].name;
        cardBody.appendChild(pTag);
      }

      
    
      


    