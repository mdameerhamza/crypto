<?php
require_once("header.php");
?>

   <!-- START Row -->
      <div class="row pt30">
        <!-- START col 12 -->
        <div class="col-md-8">
          CMT Cryptocurrency Market Capitalizations

      <!-- END Col4 -->
        </div>
        <!-- END Col 12-->
        <div class="col-md-4 currency_select_box">
        <select id="MCCLMC-currencies-select-box"></select>
        </div>

      </div>
      <!-- END Row -->


      <!-- START Magen plugin DOM -->
      <!-- NOTE: This Important your must add it in your project -->
                    <!-- Your can change the id="magen-plugin" to other id="<your-new-id-name>" but your must add the same name in your main javascript file
                      $('#<your-new-id-name>').magenCryptoLiveMarketCap({...})-->
                        <div id="magen-plugin" class="pt30 pb30"></div> 
                        <!-- END Magen plugin DOM -->
                         <div class="pt30 sub-email-div"><div class="pt30 sub-email-inside-div"></div></div>
                      </div>
                      <!-- END Container -->

                    </section>
                    <!-- END Section -->

                   


                  </div>
                  <!-- #### END Main content #### -->
<?php
require_once("footer.php");
?>
<a id="back2Top" title="Back to top" href="#">&#10148;</a>

</body>

</html>