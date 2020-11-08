Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_Cxw8aQUE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }



  function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    
        document.getElementById("result_object_name").innerHTML = results[0].label;

        gesture = results[0].label;
    
        toSpeak = "";
       
        if(gesture == "clap")
        {
          toSpeak = "A big round of applause!";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128079;";
        }

        if(gesture == "bye")
        {
          toSpeak = "Have a good day!Bye!";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128075;";
        }

        if(gesture == "thumbs up")
        {
          toSpeak = "All the best";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128077;";
        }

        if(gesture == "thumbs down")
        {
          toSpeak = "You can do better";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128078;";
        }

        if(gesture == "nice")
        {
          toSpeak = "This is awesome!";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128076;";
        }

        if(gesture == "left")
        {
          toSpeak = "Go to the left!";
          document.getElementById("result_object_gesture_icon").innerHTML = "&#128072;";
        }
    }
}