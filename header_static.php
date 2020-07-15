<?php
ob_start('sanitize_output');
?>
 

<!DOCTYPE html>
<html >
<head>
	<meta name="robots" content="noindex,nofollow" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <title>Page</title>
    <link rel="stylesheet" href="<?=get_template_directory_uri()?>/css/style.css">
	
</head>

<body>
	<main class="body-content">

	<header>

    </header>
    <div class="menu-lateral">
    	<div class="svg-container">
    		<img src="<?=get_template_directory_uri()?>/assets/img/logos/oman-logo.jpg" alt="" class="logo-svg">
    	</div>
    	<div class="items-container">
    		<div class="item-content">
    			<a href="<?=home_url()?>" class="item font-p">Home
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/company" class="item font-p">Company
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container last-level first-level">
					<div class="submenu-item-container">
						<a href="<?=home_url()?>/company/overview/" class="submenu-item-content item-link font-p">Overview</a>
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>/company/overview/vision-mission" class="submenu-item-content item-link font-p">Vision & Mission</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>/company/overview/board-of-directors" class="submenu-item-content item-link font-p">Board of Directors</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>/company/company-management/" class="submenu-item-content item-link font-p">Company Management</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>/company/human-capital/" class="submenu-item-content item-link font-p">Human Capital</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" class="submenu-item-content item-link font-p">Associates and Subsidiaries</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" class="submenu-item-content item-link font-p">Milestones</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" class="submenu-item-content item-link font-p">Awards & Honors</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" class="submenu-item-content item-link font-p">Corporate Social Responsibility</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" class="submenu-item-content item-link font-p">Code of Conduct</a>		    					
					</div>
    			</div>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/solutions" class="item font-p">Solutions
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container first-level">
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item font-p">Segments</p>
    						<?=get_arrow_item("black first-level"); ?>
    					</a>
    					<div class="submenu-container last-level second-level">
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Utilities (Power and Water)</a>
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Building and Construction Industries</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Oil, Gas and Petrochemicals</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Industrial Mining and Processing Plant</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Transportation and Infrastructure</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Renewables</a>		    					
    						</div>
		    			</div>
    				</div>
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item font-p">Products</p>
                            <?=get_arrow_item("black first-level"); ?>
    					</a>
    					<div class="submenu-container last-level second-level">
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Medium Voltage</a>
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Low Voltage</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Overhead LC</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Fire Resistant</a>		    					
    						</div>
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Building Wires and Cables</a>		    					
    						</div>
		    			</div>
    				</div>
    			</div>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/quality" class="item font-p">Quality
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container last-level first-level">
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Quality Assurance</a>
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">QMS</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">IMS</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Testing</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">LAB</a>		    					
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Approvals & Certificates</a>		    					
					</div>
    			</div>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/projects" class="item font-p">Projects
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container last-level first-level">
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">By Sector</a>
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">By Location</a>		    					
					</div>
    			</div>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/corporate" class="item font-p">Corporate
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container first-level">
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item font-p">In Country Value</p>
    						<?=get_arrow_item("black first-level"); ?>
    					</a>
    					<div class="submenu-container last-level second-level">
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">THYMAR</a>
    						</div>
		    			</div>
    				</div>
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item item-link font-p">Investor Relations</p>
    					</a>
    				</div>
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item item-link font-p">Customer Relations</p>
    					</a>
    				</div>
    				<div class="submenu-item-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content first-level">
    						<p class="submenu-item font-p">Supply Chain Relationships</p>
    						<?=get_arrow_item("black first-level"); ?>	
    					</a>
    					<div class="submenu-container last-level second-level">
    						<div class="submenu-item-container">
	    						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Are you a supplier?</a>
    						</div>
		    			</div>
    				</div>
    			</div>
    		</div>
    		<div class="item-content">
    			<a href="<?=home_url()?>/news" class="item font-p">News
                    <?=get_arrow_item("black zero-level"); ?>
                </a>
    			<div class="submenu-container last-level first-level">
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Latest News</a>
					</div>
					<div class="submenu-item-container">
						<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="submenu-item-content item-link font-p">Insights</a>		    					
					</div>
    			</div>
    		</div>
    	</div>
    	<div class="plugin-container">
    		
    	</div>
    </div>
	
	<div class="scrollbar-container">
		<div class="main-body">
            <div class="header-container">
                <!-- Añadiendo la clase header-black al div header-menu, se cambia el color del header -->
    			<div class="header-menu">
    				<div class="links-container">
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="menu-item font-p2">Sustainable Value</a>
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="menu-item font-p2">Ethics & Integrity</a>
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="menu-item font-p2">Forum</a>
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="menu-item font-p2">Downloads</a>
    					<a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="menu-item font-p2">Contact Us</a>
    				</div>
    				<div class="search-container">
    					<form class="search-item">
    						<button class="search-button" type="submit">
    							<?=get_lupa_svg(); ?>
    						</button>
    						<input class="search-input" type="text" placeholder="" name="search">
    					</form>
    				</div>
                    <div class="language-container">
                        <a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="language-item font-p2">ENG</a>
    				    <p class="language-item font-p2">|</p>
                        <a href="<?=home_url()?>" target="_blank" rel="noopener noreferrer" class="language-item font-p2">AR</a>
                    </div>
    			</div>
            </div>

