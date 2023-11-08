function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yfzyMaMnP/model.json',modelReady);
    }
    function modelReady(){
        classifier.classify(gotResults);
    }
    

    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            random_number_r = Math.floor(Math.random() * 255) + 1;
            random_number_g = Math.floor(Math.random() * 255) + 1;
            random_number_b = Math.floor(Math.random() * 255) + 1;
            document.getElementById("result_label").innerHTML='I can hear -'+results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
             document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
              document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        
        
              img=document.getElementById('ear');
              img1=document.getElementById('dog1');
              img2=document.getElementById('cat1');
              img3=document.getElementById('lion1');
              img3=document.getElementById('cow1');
        
        
              if(results[0].label=="Barking"){
                img.src='dog1.png';
                
              }
        
              else if(results[0].label=="meowing"){
                img.src='cat1.png';
                
              }
        
              else if(results[0].label=="roar"){
                img.src='lion1.jpg';
                
              }
        
              else {
                img.src='cow1.jpg';
                
              }
          
              
        }
        
        }