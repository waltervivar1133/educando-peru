import React from 'react';

const Footer = () => {
  return ( 

    <footer className="footer-distributed">

			<div className="footer-left">

				<h3>Educando<span>Peru</span></h3>

				<p className="footer-links">
					<a href="#">Home</a>
					|
					<a href="#">Nosotros</a>
					|
				
				</p>

				<p className="footer-company-name">educando-Peru &copy; 2020</p>
			</div>

			<div className="footer-center">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>21 Revolution Street</span> Delhi, India</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1 555 123456</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contact@webdevtrick.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Web Dev Trick is a blog for web designers, graphic designers, web developers &amp; SEO Learner.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>

				</div>

			</div>

		</footer>

   );
}
 
export default Footer;