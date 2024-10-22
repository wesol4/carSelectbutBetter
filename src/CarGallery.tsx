import React, { useState, useEffect } from 'react';
import { cars } from './CarList';
import './CarGallery.css';

const CarGallery: React.FC = () => {
	const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null); // Śledzimy indeks samochodu, którego obraz jest powiększony
	const [imageIndexes, setImageIndexes] = useState<number[]>(Array(cars.length).fill(0)); // Indeksy obrazków dla każdego samochodu

	const handleClick = (carIndex: number) => {
		setSelectedCarIndex(carIndex); // Ustawiamy indeks samochodu po kliknięciu w obrazek
	};

	const closeFullscreen = () => {
		setSelectedCarIndex(null); // Zamykamy tryb fullscreen
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

	// Obsługa zmiany obrazków za pomocą strzałek na klawiaturze
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (selectedCarIndex !== null) {
				if (event.key === 'ArrowRight') {
					nextImage(selectedCarIndex); // Strzałka w prawo zmienia obrazek na następny
				} else if (event.key === 'ArrowLeft') {
					prevImage(selectedCarIndex); // Strzałka w lewo zmienia obrazek na poprzedni
				} else if (event.key === 'Escape') {
					closeFullscreen(); // Zamykamy tryb fullscreen po naciśnięciu "Escape"
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown); // Dodajemy event listener na klawisze

		return () => {
			window.removeEventListener('keydown', handleKeyDown); // Usuwamy event listener po zamknięciu komponentu
		};
	}, [selectedCarIndex]);

	return (
		<div>
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
								onClick={() => handleClick(index)} // Kliknięcie powoduje powiększenie
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
								<a href={car.otomotoUrl} target="_blank" rel="noopener noreferrer">
									Zobacz na Otomoto
								</a>
							</p>
							<p>
								<strong>Zdjęcia:</strong>{' '}
								<a href={car.wwwExample} target="_blank" rel="noopener noreferrer">
									Zobacz na Otomoto
								</a>
							</p>
						</div>
					</div>
				))}
			</div>

			{selectedCarIndex !== null && (
				<div className="fullscreen" onClick={closeFullscreen}>
					<button className="nav-button left" onClick={() => prevImage(selectedCarIndex)}>{'<'}</button>
					<img
						src={cars[selectedCarIndex].imageUrls[imageIndexes[selectedCarIndex]]}
						alt="Selected Car"
						className="fullscreen-image"
					/>
					<button className="nav-button right" onClick={() => nextImage(selectedCarIndex)}>{'>'}</button>
				</div>
			)}
		</div>
	);
};

export default CarGallery;
