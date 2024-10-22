import React, { useState, useEffect } from 'react';
import { cars } from './CarList';
import './CarGallery.css';

const CarGallery: React.FC = () => {
	const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null); // Wybrany samochód do powiększenia
	const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null); // Wybrany indeks obrazka w trybie fullscreen
	const [imageIndexes, setImageIndexes] = useState<number[]>(Array(cars.length).fill(0)); // Indeksy obrazków dla każdego samochodu

	const handleClick = (carIndex: number, imageIndex: number) => {
		setSelectedCarIndex(carIndex); // Ustawiamy indeks samochodu do powiększenia
		setFullscreenImageIndex(imageIndex); // Ustawiamy indeks obrazka w trybie fullscreen
	};

	const closeFullscreen = () => {
		setSelectedCarIndex(null); // Zamykamy tryb fullscreen
		setFullscreenImageIndex(null); // Resetujemy indeks obrazka
	};

	// Funkcje do zmiany obrazka w miniaturce
	const nextImage = (carIndex: number) => {
		setImageIndexes((prevIndexes) =>
			prevIndexes.map((index, i) =>
				i === carIndex ? (index === cars[carIndex].imageUrls.length - 1 ? 0 : index + 1) : index
			)
		);
	};

	const prevImage = (carIndex: number) => {
		setImageIndexes((prevIndexes) =>
			prevIndexes.map((index, i) =>
				i === carIndex ? (index === 0 ? cars[carIndex].imageUrls.length - 1 : index - 1) : index
			)
		);
	};

	// Funkcje do zmiany obrazka w trybie fullscreen
	const nextFullscreenImage = () => {
		if (selectedCarIndex !== null && fullscreenImageIndex !== null) {
			setFullscreenImageIndex((prevIndex) =>
				prevIndex === cars[selectedCarIndex].imageUrls.length - 1 ? 0 : prevIndex + 1
			);
		}
	};

	const prevFullscreenImage = () => {
		if (selectedCarIndex !== null && fullscreenImageIndex !== null) {
			setFullscreenImageIndex((prevIndex) =>
				prevIndex === 0 ? cars[selectedCarIndex].imageUrls.length - 1 : prevIndex - 1
			);
		}
	};

	// Obsługa zmiany obrazków za pomocą strzałek na klawiaturze w trybie fullscreen
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (selectedCarIndex !== null && fullscreenImageIndex !== null) {
				if (event.key === 'ArrowRight') {
					nextFullscreenImage(); // Strzałka w prawo zmienia obrazek na następny
				} else if (event.key === 'ArrowLeft') {
					prevFullscreenImage(); // Strzałka w lewo zmienia obrazek na poprzedni
				} else if (event.key === 'Escape') {
					closeFullscreen(); // Zamykamy tryb fullscreen po naciśnięciu "Escape"
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown); // Dodajemy event listener na klawisze

		return () => {
			window.removeEventListener('keydown', handleKeyDown); // Usuwamy event listener po zamknięciu komponentu
		};
	}, [selectedCarIndex, fullscreenImageIndex]);

	return (
		<div>
			{/* Galeria miniaturek */}
			<div className="gallery">
				{cars.map((car, index) => (
					<div key={index} className="car-card">
						<div className="image-container">
							{/* Strzałki do zmiany obrazka */}
							<button onClick={() => prevImage(index)}>{'<'}</button>
							<img
								className="thumbnail"
								src={car.imageUrls[imageIndexes[index]]} // Wyświetlaj aktualny obrazek dla tego samochodu
								alt={car.name}
								onClick={() => handleClick(index, imageIndexes[index])} // Kliknięcie powoduje powiększenie
							/>
							<button onClick={() => nextImage(index)}>{'>'}</button>
						</div>
						<div className="car-info">
							<h3>{car.name}</h3>
							<p><strong>Silnik:</strong> {car.engine}</p>
							<p><strong>Moc:</strong> {car.power} KM</p>
							<p><strong>Cena:</strong> {car.price} PLN</p>
							<p><strong>Uwagi:</strong> {car.comments}</p>
							<p>
								<strong>Otomoto:</strong>{' '}
								<a href={car.otomoto} target="_blank" rel="noopener noreferrer">
									Zobacz na Otomoto
								</a>
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Powiększony obrazek */}
			{selectedCarIndex !== null && fullscreenImageIndex !== null && (
				<div className="fullscreen">
					{/* Strzałki do zmiany obrazka w trybie fullscreen */}
					<button className="nav-button left" onClick={(e) => { e.stopPropagation(); prevFullscreenImage(); }}>{'<'}</button>
					<img
						src={cars[selectedCarIndex].imageUrls[fullscreenImageIndex]} // Wyświetlamy powiększony obrazek
						alt="Selected Car"
						className="fullscreen-image"
					/>
					<button className="nav-button right" onClick={(e) => { e.stopPropagation(); nextFullscreenImage(); }}>{'>'}</button>
					<button className="close-button" onClick={closeFullscreen}>X</button>
				</div>
			)}
		</div>
	);
};

export default CarGallery;
