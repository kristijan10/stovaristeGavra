import React from "react";

// Images
import envelope from "../../assets/footer/envelope.svg";
import logo from "../../assets/footer/logoFooter.svg";
import mapPoint from "../../assets/footer/mapPoint.svg";
import phone from "../../assets/footer/phone.svg";

// SCSS
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer" id="kontakt">
			<div className="logo__holder">
				<img src={logo} alt="Footer logo" />
			</div>
			<div className="map__holder">
				<h4 className="map__title">Kako do nas</h4>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8245.877587007095!2d20.235892464485012!3d44.773398290110315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a698672c9ae8f%3A0x3ccde4226cfaf0b9!2sSTR%20%22Gavra%22%2C%20Stovari%C5%A1te%20Ogreva%2C%20Uglja%2C%20Drva.!5e0!3m2!1ssr!2srs!4v1642441065250!5m2!1ssr!2srs"
					title="googleMap"
				></iframe>
			</div>
			<div className="contact__holder">
				<h4 className="contact__title">Kontaktirajte nas</h4>
				<div className="contacts">
					<div className="contacts-street">
						<div className="street-icon">
							<img src={mapPoint} alt="Pin icon" />
						</div>
						<div className="street-info">
							<ul>
								<li>11275 Jakovo</li>
								<li>Bagremova 1</li>
							</ul>
						</div>
					</div>
					<div className="contacts-phone">
						<div className="phone-icon">
							<img src={phone} alt="Phone icon" />
						</div>
						<div className="phone-info">
							<ul>
								<li>
									<a href="tel:+381 645436607">+381 645436607</a>
								</li>
								<li>
									<a href="tel:+381 63254433">+381 63254433</a>
								</li>
								<li>
									<a href="tel:+381 008443475">+381 008443475</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="contacts-email">
						<div className="email-icon">
							<img src={envelope} alt="Email icon" />
						</div>
						<div className="email-info">
							<ul>
								<li>
									<a href="emailto:strgavra@gmail.com">strgavra@gmail.com</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="time__holder">
				<h4 className="time__title">Radno vreme</h4>
				<div className="time-weekdays">
					<ul>
						<li>ponedeljak/subota</li>
						<li>8:00 - 16:00h</li>
					</ul>
				</div>
				{/* <div className="time-weekends">
          <ul>
            <li>nedelja</li>
            <li>Neradna</li>
          </ul>
        </div> */}
			</div>
			<div className="copyright">
				<small>&copy;{new Date().getFullYear()} Sva prava zadrzana.</small>
			</div>
		</footer>
	);
}
