import React, {useState} from 'react';
import { cars } from './CarList';
import './CarGallery.css';

const CarGallery: React.FC = () => {
	const [selectedCar, setSelectedCar] = useState<string | null>(null);
	const [imageIndexes, setImageIndexes] = useState<number[]>(Array(cars.length).fill(0)); // Przechowujemy indeksy obrazków dla każdego samochodu

	const handleClick = (imageUrl: string) => {
		setSelectedCar(imageUrl);
	};

	const closeFullscreen = () => {
		setSelectedCar(null);
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

	return (
		<div>
			{/* Galeria miniaturek */}
			<div className="gallery" style={{borderStyle: ''}}>
				{cars.map((car, index) => (
					<div key={index} className="car-card">
						<div className="image-container" style={{borderStyle: ''}}>
							{/* Strzałki do zmiany obrazka */}
							<button onClick={() => prevImage(index)}>{'<'}</button>
							<img
								className="thumbnail"
								src={car.imageUrls[imageIndexes[index]]} // Wyświetlaj aktualny obrazek dla tego samochodu
								alt={car.name}
								onClick={() => handleClick(car.imageUrls[imageIndexes[index]])}
							/>
							<button onClick={() => nextImage(index)}>{'>'}</button>
						</div>
						<div className="car-info"style={{borderStyle: ''}}>
							<h3>{car.name}</h3>
							<p><strong>Silnik:</strong> {car.engine} L</p>
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
								<strong>WWW:</strong>{' '}
								<a href={car.wwwExample} target="_blank" rel="noopener noreferrer">
									Zobacz na Googlu
								</a>
							</p>
						</div>
					</div>
				))}
			</div>

			{selectedCar && (
				<div className="fullscreen" onClick={closeFullscreen}>
					<img src={selectedCar} alt="Selected Car" />
				</div>
			)}
		</div>
	);
};

export default CarGallery;
