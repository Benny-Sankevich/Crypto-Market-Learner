///<reference path="jquery-3.5.1.js"/>

// on click about button show about data
$('#aboutButton').on("click", function () {
  $("#row").empty();
  $("#row").append(`
                <div class="col-sm-12" >
                <h2>Crypto Market Learner</2>
                <h3>Welcome! to my Crypto Market Learner.
                <br>This Website use the functions list below:</h3>
                
                    <li>Dynamic page layout.</li>
                    <li>Bootstrap & flex.</li>
                    <li>jQuery.</li>
                    <li>Single Page Application.</li>
                    <li>Ajax.</li>
                    <li>External API's.</li>
                             
                <img src="assets/images/benny.png" alt="Card image cap" style="width:200px;height:170px;">
                  <h3>Benny Sankevich <br>
                  Phone Number: 0508889169.<br>
                  Email Address: <a href="mailto:Bennysankevich@gmail.com">Bennysankevich@gmail.com</a></h3>
                  <a href="https://www.linkedin.com/in/benny-sankevich-5434481a6">
                  <img src="assets/images/linkedin.png" alt="linkedin"  style="width:30px;height:30px">
                  </a>
                </div>
                `);
});
