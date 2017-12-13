
 /*
 Athor: Mandeep Saini
 Author email: mandeepsaini0211@gmail.com 
 License: Released under the MIT license
 */

 $(document).ready(function()
        {
            $('.menu_22 a').click(function()
            {
                $('.menu_22 a').removeClass('current');
                $(this).addClass('current');
				$('.banner_img').hide();
                var mname = $(this).text();
                $('.menu_name_gets').text(mname);
            });
        });
  
        
        
    $(window).scroll(function(){
        var sticky = $('.dddfkjfk'),
            scroll = $(window).scrollTop();

        if (scroll >= 30) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    
    
        $(document).ready(function()
        {
            $("#trans_range").change(function(){
            var newval=$(this).val();
            $('.tran_val').text(newval);
            twentyfifty.groupclick(false,[29, 30, 31, 32, 34, 35],newval);
            return true;
            });
            
            $("#cook_range").change(function(){
            var newval=$(this).val();
            $('.cook_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[44],newval);
            return true;
            });
            
            $("#building_range").change(function(){
            var newval=$(this).val();
            $('.building_val').text(newval);
            if(newval == '1')
			{
				 twentyfifty.groupclick(false,[36],1)
			}
				
			else if(newval == '2')
			{
				 twentyfifty.groupclick(false,[36],2)
			}	
				
			else if(newval == '3' || newval == '4')
			{
				 twentyfifty.groupclick(false,[36],3)
			}	
            twentyfifty.groupclick(false,[37, 38, 39, 40],newval);
            return true;
            });
            
            $("#indu_range").change(function(){
            var newval=$(this).val();
            $('.indu_val').text(newval);
            //alert(newval);
			twentyfifty.groupclick(false,[41, 42, 43],newval);
            return true;
            });
			
            $("#agri_range").change(function(){
            var newval=$(this).val();
            $('.agri_val').text(newval);
            //alert(newval);
      	    twentyfifty.groupclick(false,[46, 47],newval);
            return true;
            });
            
             $("#tel_range").change(function(){
            var newval=$(this).val();
            $('.tel_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[48],newval);
            return true;
            }); 
            
            $("#solar_range").change(function(){
            var newval=$(this).val();
            $('.solar_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[8, 9, 13, 14],newval);
            return true;
            });
            
            $("#wind_range").change(function(){
            var newval=$(this).val();
            $('.wind_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[10, 11],newval);
            return true;
            }); 
            
            $("#nucl_range").change(function(){
            var newval=$(this).val();
            $('.nucl_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[6],newval);
            return true;
            });  
             
            $("#hydroe_range").change(function(){
            var newval=$(this).val();
            $('.hydroe_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[7, 12],newval);
            return true;
            });
            
            $("#bio_range").change(function(){
            var newval=$(this).val();
            $('.bio_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[17, 18, 19, 20],newval);
            return true;
            }); 
             
            $("#was_range").change(function(){
            var newval=$(this).val();
            $('.was_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[21],newval);
            return true;
            });
              
            $("#hydg_range").change(function(){
            var newval=$(this).val();
            $('.hydg_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[22],newval);
            return true;
            });
            
            $("#gas_range").change(function(){
            var newval=$(this).val();
            $('.gas_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[23, 0],newval);
            return true;
            }); 
            
            $("#coal_range").change(function(){
            var newval=$(this).val();
            $('.coal_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[24, 1, 2],newval);
            return true;
            }); carbon_range
            
            $("#oil_range").change(function(){
            var newval=$(this).val();
            $('.oil_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[25],newval);
            return true;
            });    
            
            $("#carbon_range").change(function(){
            var newval=$(this).val();
            $('.carbon_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[4, 5],newval);
            return true;
            });
                 t_d_range
            $("#cross_ele_range").change(function(){
            var newval=$(this).val();
            $('.cross_ele_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[15],newval);
            return true;
            });
            
            $("#t_d_range").change(function(){
            var newval=$(this).val();
            $('.t_d_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[50],newval);
            return true;
            });
            
            $("#storage_range").change(function(){
            var newval=$(this).val();
            $('.storage_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(true,[51],newval);
            return true;
            });
            
            $("#reliability_range").change(function(){
            var newval=$(this).val();
            $('.reliability_val').text(newval);
            //alert(newval);
            twentyfifty.groupclick(false,[52],newval);
            return true;
            });
            
        });

 	$(window).load(function()
	 {		
			$("#home_page_set").trigger( "click" );
			$('#b_growth a').css('background-color','#FFAE55');
			$('#a_growth a').css('background-color','#FFAE55');
			$('#c32l1').css('background-color','#FFAE55');
			$('#c32l2').css('background-color','#FFAE55');
			//$('.legend-item6').text('Hydro');
	});

	/*$(document).ready(function()
	 {		
		$("#home_page_set").click(function()
		{
			$('.banner_img').show();
		});
	});*/


$(document).ready(function()
	 {		
		$(".checkss").click(function()
		{
			twentyfifty.startDemo(29);
			return true;
		});
	});

$(document).ready(function()
	 {		
		$("#pathway_option").change(function()
		{
			var ki = $(this).val();
			if(ki == '1110111111111111011111111102011110111111111110112011102') /*--all level 1---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("267.4 '000ha");
				$('#con_ch_val').text("10.5 '000ha");		
				$('#bio_ch_val').text("2.1 '000ha");
					
			}
			else if(ki == '4440444444444444044444444402044440443444444440442044402') /*--all level 4---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("998.6 '000ha");
				$('#con_ch_val').text("24.9 '000ha");		
				$('#bio_ch_val').text("8.4 '000ha");
					
			}
			else if(ki == '3330333333333333033333333302033330333333333330332033302') /*--all level 3---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("697.5 '000ha");
				$('#con_ch_val').text("19.8 '000ha");		
				$('#bio_ch_val').text("10.0 '000ha");
					
			}
			else if(ki == '2220222222222222022222222202022220222222222220222022202') /*--all level 2---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("479.3 '000ha");
				$('#con_ch_val').text("15.1 '000ha");		
				$('#bio_ch_val').text("5.0 '000ha");
					
			}
			else if(ki == '2220222222222222022222222202022220222222221120222022202') /*--Deafult---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("479.3 '000ha");
				$('#con_ch_val').text("15.1 '000ha");		
				$('#bio_ch_val').text("5.0 '000ha");
					
			}
			else if(ki == '11201212424444420323233222020222402422222211202420242022222') /*--Maximum RE---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("998.6 '000ha");
				$('#con_ch_val').text("10.5 '000ha");		
				$('#bio_ch_val').text("6.1 '000ha");
					
			}
			else if(ki == '22202222222244220223223222020222202222222211202220222022222') /*-- State vision pathway---*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#F44545');
				$('.mm2').css('background-color','white');
				$('.mm3').css('background-color','white');
				$('.mm4').css('background-color','white');
				
				$('#rew_ch_val').text("479.4 '000ha");
				$('#con_ch_val').text("15.1 '000ha");		
				$('#bio_ch_val').text("5.0 '000ha");
					
			}
			else if(ki == '11104422424444420414314222020444404422242445404420442022222') /*-- Re Push--*/
			{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
				$('.mm1').css('background-color','#92C979');
				$('.mm2').css('background-color','#92C979');
				$('.mm3').css('background-color','#92C979');
				$('.mm4').css('background-color','#92C979');
				
				$('#rew_ch_val').text("998.6 '000ha");
				$('#con_ch_val').text("13.7 '000ha");		
				$('#bio_ch_val').text("4.6 '000ha");
					
			}
			
			
			
			
		});
	});

$(document).ready(function()
	 {		
		$("#c32l1").click(function()
		{
			$('#c32l1').css('background-color','#F44545');
				$('#c32l2').css('background-color','white');
				$('#c32l3').css('background-color','white');
				$('#c32l4').css('background-color','white');
		});
	
	$("#c32l2").click(function()
		{
				$('#c32l1').css('background-color','#FFAE55');
				$('#c32l2').css('background-color','#FFAE55');
				$('#c32l3').css('background-color','white');
				$('#c32l4').css('background-color','white');
		});
	
	$("#c32l3").click(function()
		{
				$('#c32l1').css('background-color','#EFDD60');
				$('#c32l2').css('background-color','#EFDD60');
				$('#c32l3').css('background-color','#EFDD60');
				$('#c32l4').css('background-color','white');
		});
	
	$("#c32l4").click(function()
		{
			$('#c32l1').css('background-color','#92C979');
				$('#c32l2').css('background-color','#92C979');
				$('#c32l3').css('background-color','#92C979');
				$('#c32l4').css('background-color','#92C979');
		});
	
	
	$("#c27l1").click(function()
		{
				$('#c27l1').css('background-color','#F44545');
				$('#c27l2').css('background-color','white');
				$('#c27l3').css('background-color','white');
				
		});
	
	$("#c27l2").click(function()
		{
				$('#c27l1').css('background-color','#FFAE55');
				$('#c27l2').css('background-color','#FFAE55');
				$('#c27l3').css('background-color','white');
				
		});
	
	$("#c27l3").click(function()
		{
				$('#c27l1').css('background-color','#EFDD60');
				$('#c27l2').css('background-color','#EFDD60');
				$('#c27l3').css('background-color','#EFDD60');
				
		});
	
	});

$(document).ready(function()
{
	$('#pathway_option').change(function()
	{
		var aa = $("#pathway_option option:selected").text();
		$('.menu_name_gets').text(aa);
	});
});

$(window).load(function()
{
	var bb = $('#custom-legend0 .legend-item6').text('Pumps & Tractors');
	
});	

$(document).ready(function()
{
	$('#trans_range').change(function()
	{
		var we = $(this).val();
		if(we == '1')
		{
			$('#c32l1').css('background-color','#F44545');
			$('#c32l2').css('background-color','white');
			$('#c32l3').css('background-color','white');
			$('#c32l4').css('background-color','white');	
		}
		else if(we == '2')
		{
			$('#c32l1').css('background-color','#FFAE55');
			$('#c32l2').css('background-color','#FFAE55');
			$('#c32l3').css('background-color','white');
			$('#c32l4').css('background-color','white');
		}
		else if(we == '3')
		{
			$('#c32l1').css('background-color','#EFDD60');
			$('#c32l2').css('background-color','#EFDD60');
			$('#c32l3').css('background-color','#EFDD60');
			$('#c32l4').css('background-color','white');
		}
		else if(we == '4')
		{
			$('#c32l1').css('background-color','#92C979');
			$('#c32l2').css('background-color','#92C979');
			$('#c32l3').css('background-color','#92C979');
			$('#c32l4').css('background-color','#92C979');
		}
	});
	
	
	$("#building_range").change(function()
	{
    	var newvald=$(this).val();
		if(newvald == '3')
		{	
			$('#c36l1').css('background-color','#EFDD60');
			$('#c36l2').css('background-color','#EFDD60');
			$('#c36l3').css('background-color','#EFDD60');	
		}
		else if(newvald == '4')
		{	
			$('#c36l1').css('background-color','#EFDD60');
			$('#c36l2').css('background-color','#EFDD60');
			$('#c36l3').css('background-color','#EFDD60');	
		}
		else if(newvald == '2')
		{	
			$('#c36l1').css('background-color','#FFAE55');
			$('#c36l2').css('background-color','#FFAE55');
			$('#c36l3').css('background-color','transparent');	
		}
		else if(newvald == '1')
		{	
			$('#c36l1').css('background-color','#F44545');
			$('#c36l2').css('background-color','transparent');
			$('#c36l3').css('background-color','transparent');	
		}
			
	});
	
	$("#c36l1").click(function()
	{
		$('#c36l1').css('background-color','#F44545');
		$('#c36l2').css('background-color','transparent');
		$('#c36l3').css('background-color','transparent');	
				
	});
	
	$("#c36l2").click(function()
	{
		$('#c36l1').css('background-color','#FFAE55');
		$('#c36l2').css('background-color','#FFAE55');
		$('#c36l3').css('background-color','transparent');	
				
	});
	
	$("#c36l3").click(function()
	{
		$('#c36l1').css('background-color','#EFDD60');
		$('#c36l2').css('background-color','#EFDD60');
		$('#c36l3').css('background-color','#EFDD60');
				
	});
});


$(window).load(function()
{
	var bb = $('#custom-legend0 .legend-item6').text('Pumps & Tractors');
	var bb = $('#custom-legend1 .legend-item6').text('Oil');
	
});	




$(document).ready(function()
{

	$("#pathway_option").change(function()
	{
   		var vals=$(this).val();
		
		if(vals == '1110111111111111011111111102011110111111111110112011102') /*---------All level 1--------*/
		{
			$('#trans_range').val('1');
			$('.tran_val').html('1'); 
			
			$('#cook_range').val('1');
			$('.cook_val').html('1'); 
			
			$('#building_range').val('1');
			$('.building_val').html('1'); 
			
			$('#indu_range').val('1');
			$('.indu_val').html('1'); 
			
			$('#agri_range').val('1');
			$('.agri_val').html('1'); 
			
			$('#gas_range').val('1');
			$('.gas_val').html('1'); 
			
			$('#coal_range').val('1');
			$('.coal_val').html('1'); 
			
			$('#carbon_range').val('1');
			$('.carbon_val').html('1');
			
			
			$('#solar_range').val('1');
			$('.solar_val').html('1');
			
			$('#wind_range').val('1');
			$('.wind_val').html('1');
			
			$('#hydroe_range').val('1');
			$('.hydroe_val').html('1');
			
			$('#bio_range').val('1');
			$('.bio_val').html('1');
			
			$('#was_range').val('1');
			$('.was_val').html('1');
			
			$('#hydg_range').val('1');
			$('.hydg_val').html('1');
			
			$('#nucl_range').val('1');
			$('.nucl_val').html('1');
			
			$('#t_d_range').val('1');
			$('.t_d_val').html('1');
			
			$('#storage_range').val('1');
			$('.storage_val').html('1');
		}
		
		else if(vals == '4440444444444444044444444402044440443444444440442044402') /*---------All level 4--------*/
		{
			$('#trans_range').val('4');
			$('.tran_val').html('4'); 
			
			$('#cook_range').val('4');
			$('.cook_val').html('4'); 
			
			$('#building_range').val('4');
			$('.building_val').html('4'); 
			
			$('#indu_range').val('4');
			$('.indu_val').html('4'); 
			
			$('#agri_range').val('4');
			$('.agri_val').html('4'); 
			
			$('#gas_range').val('4');
			$('.gas_val').html('4'); 
			
			$('#coal_range').val('4');
			$('.coal_val').html('4'); 
			
			$('#carbon_range').val('4');
			$('.carbon_val').html('4');
			
			$('#solar_range').val('4');
			$('.solar_val').html('4');
			
			$('#wind_range').val('4');
			$('.wind_val').html('4');
			
			$('#hydroe_range').val('4');
			$('.hydroe_val').html('4');
			
			$('#bio_range').val('4');
			$('.bio_val').html('4');
			
			$('#was_range').val('4');
			$('.was_val').html('4');
			
			$('#nucl_range').val('4');
			$('.nucl_val').html('4');
			
			$('#hydg_range').val('4');
			$('.hydg_val').html('4');
			
			$('#t_d_range').val('4');
			$('.t_d_val').html('4');
			
			$('#storage_range').val('4');
			$('.storage_val').html('4');
		}
		
		else if(vals == '3330333333333333033333333302033330333333333330332033302') /*---------All level 3--------*/
		{
			$('#trans_range').val('3');
			$('.tran_val').html('3'); 
			
			$('#cook_range').val('3');
			$('.cook_val').html('3'); 
			
			$('#building_range').val('3');
			$('.building_val').html('3'); 
			
			$('#indu_range').val('3');
			$('.indu_val').html('3'); 
			
			$('#agri_range').val('3');
			$('.agri_val').html('3'); 
			
			$('#gas_range').val('3');
			$('.gas_val').html('3'); 
			
			$('#coal_range').val('3');
			$('.coal_val').html('3'); 
			
			$('#carbon_range').val('3');
			$('.carbon_val').html('3');
			
			$('#solar_range').val('3');
			$('.solar_val').html('3');
			
			$('#wind_range').val('3');
			$('.wind_val').html('3');
			
			$('#hydroe_range').val('3');
			$('.hydroe_val').html('3');
			
			$('#bio_range').val('3');
			$('.bio_val').html('3');
			
			$('#was_range').val('3');
			$('.was_val').html('3');
			
			$('#hydg_range').val('3');
			$('.hydg_val').html('3');
			
			$('#nucl_range').val('3');
			$('.nucl_val').html('3');
			
			$('#t_d_range').val('3');
			$('.t_d_val').html('3');
			
			$('#storage_range').val('3');
			$('.storage_val').html('3');
		}
		
		else if(vals == '2220222222222222022222222202022220222222222220222022202') /*---------All level 2--------*/
		{
			$('#trans_range').val('2');
			$('.tran_val').html('2'); 
			
			$('#cook_range').val('2');
			$('.cook_val').html('2'); 
			
			$('#building_range').val('2');
			$('.building_val').html('2'); 
			
			$('#indu_range').val('2');
			$('.indu_val').html('2'); 
			
			$('#agri_range').val('2');
			$('.agri_val').html('2'); 
			
			$('#gas_range').val('2');
			$('.gas_val').html('2'); 
			
			$('#coal_range').val('2');
			$('.coal_val').html('2'); 
			
			$('#carbon_range').val('2');
			$('.carbon_val').html('2');
			
			$('#solar_range').val('2');
			$('.solar_val').html('2');
			
			$('#wind_range').val('2');
			$('.wind_val').html('2');
			
			$('#hydroe_range').val('2');
			$('.hydroe_val').html('2');
			
			$('#bio_range').val('2');
			$('.bio_val').html('2');
			
			$('#was_range').val('2');
			$('.was_val').html('2');
			
			$('#hydg_range').val('2');
			$('.hydg_val').html('2');
			
			$('#nucl_range').val('2');
			$('.nucl_val').html('2');
			
			$('#t_d_range').val('2');
			$('.t_d_val').html('2');
			
			$('#storage_range').val('2');
			$('.storage_val').html('2');
		}
		
		else if(vals == '2220222222222222022222222202022220222222221120222022202') /*---------Default--------*/
		{
				$('#trans_range').val('2');
			$('.tran_val').html('2'); 
			
			$('#cook_range').val('2');
			$('.cook_val').html('2'); 
			
			$('#building_range').val('2');
			$('.building_val').html('2'); 
			
			$('#indu_range').val('2');
			$('.indu_val').html('2'); 
			
			$('#agri_range').val('2');
			$('.agri_val').html('2'); 
			
			$('#gas_range').val('2');
			$('.gas_val').html('2'); 
			
			$('#coal_range').val('2');
			$('.coal_val').html('2'); 
			
			$('#carbon_range').val('2');
			$('.carbon_val').html('2');
			
			$('#solar_range').val('2');
			$('.solar_val').html('2');
			
			$('#wind_range').val('2');
			$('.wind_val').html('2');
			
			$('#hydroe_range').val('2');
			$('.hydroe_val').html('2');
			
			$('#bio_range').val('2');
			$('.bio_val').html('2');
			
			$('#was_range').val('2');
			$('.was_val').html('2');
			
			$('#hydg_range').val('2');
			$('.hydg_val').html('2');
			
			$('#nucl_range').val('2');
			$('.nucl_val').html('2');
			
			$('#t_d_range').val('2');
			$('.t_d_val').html('2');
			
			$('#storage_range').val('2');
			$('.storage_val').html('2');
		}
		
		else if(vals == '22202222222244220223223222020222202222222211202220222022222') /*---------State Vision Pathway--------*/
		{
				$('#trans_range').val('2');
			$('.tran_val').html('2'); 
			
			$('#cook_range').val('2');
			$('.cook_val').html('2'); 
			
			$('#building_range').val('2');
			$('.building_val').html('2'); 
			
			$('#indu_range').val('2');
			$('.indu_val').html('2'); 
			
			$('#agri_range').val('2');
			$('.agri_val').html('2'); 
			
			$('#gas_range').val('2');
			$('.gas_val').html('2'); 
			
			$('#coal_range').val('2');
			$('.coal_val').html('2'); 
			
			$('#carbon_range').val('2');
			$('.carbon_val').html('2');
			
			$('#solar_range').val('4');
			$('.solar_val').html('4');
			
			$('#wind_range').val('2');
			$('.wind_val').html('2');
			
			$('#hydroe_range').val('4');
			$('.hydroe_val').html('4');
			
			$('#nucl_range').val('2');
			$('.nucl_val').html('2');
			
			$('#bio_range').val('3');
			$('.bio_val').html('3');
			
			$('#was_range').val('2');
			$('.was_val').html('2');
			
			$('#hydg_range').val('3');
			$('.hydg_val').html('3');
			
			$('#t_d_range').val('2');
			$('.t_d_val').html('2');
			
			$('#storage_range').val('2');
			$('.storage_val').html('2');
		}
		
		else if(vals == '11104422424444420414314222020444404422242445404420442022222') /*---------Re Push and Low Emissions Pathways --------*/
		{
				$('#trans_range').val('4');
			$('.tran_val').html('4'); 
			
			$('#cook_range').val('4');
			$('.cook_val').html('4'); 
			
			$('#building_range').val('2');
			$('.building_val').html('2'); 
			
			$('#indu_range').val('4');
			$('.indu_val').html('4'); 
			
			$('#agri_range').val('4');
			$('.agri_val').html('4'); 
			
			$('#gas_range').val('1');
			$('.gas_val').html('1'); 
			
			$('#coal_range').val('1');
			$('.coal_val').html('1'); 
			
			$('#carbon_range').val('4');
			$('.carbon_val').html('4');
			
			$('#solar_range').val('4');
			$('.solar_val').html('4');
			
			$('#wind_range').val('4');
			$('.wind_val').html('4');
			
			$('#hydroe_range').val('3');
			$('.hydroe_val').html('3');
			
			$('#nucl_range').val('2');
			$('.nucl_val').html('2');
			
			$('#bio_range').val('3');
			$('.bio_val').html('3');
			
			$('#was_range').val('2');
			$('.was_val').html('2');
			
			$('#hydg_range').val('4');
			$('.hydg_val').html('4');
			
			$('#t_d_range').val('4');
			$('.t_d_val').html('4');
			
			$('#storage_range').val('4');
			$('.storage_val').html('4');
		}
		
			else if(vals == '11201212424444420323233222020222402422222211202420242022222') /*--------Maximum RE and Electic Vehicle Pathway--------*/
		{
				$('#trans_range').val('3');
			$('.tran_val').html('3'); 
			
			$('#cook_range').val('2');
			$('.cook_val').html('2'); 
			
			$('#building_range').val('2');
			$('.building_val').html('2'); 
			
			$('#indu_range').val('2');
			$('.indu_val').html('2'); 
			
			$('#agri_range').val('3');
			$('.agri_val').html('3'); 
			
			$('#gas_range').val('1');
			$('.gas_val').html('1'); 
			
			$('#coal_range').val('2');
			$('.coal_val').html('2'); 
			
			$('#carbon_range').val('2');
			$('.carbon_val').html('2');
			
			$('#solar_range').val('4');
			$('.solar_val').html('4');
			
			$('#wind_range').val('4');
			$('.wind_val').html('4');
			
			$('#hydroe_range').val('4');
			$('.hydroe_val').html('4');
			
			$('#nucl_range').val('2');
			$('.nucl_val').html('2');
			
			
			$('#bio_range').val('3');
			$('.bio_val').html('3');
			
			$('#was_range').val('3');
			$('.was_val').html('3');
			
			$('#hydg_range').val('3');
			$('.hydg_val').html('3');
			
			$('#t_d_range').val('2');
			$('.t_d_val').html('2');
			
			$('#storage_range').val('4');
			$('.storage_val').html('4');
		}
			
	});
	
});