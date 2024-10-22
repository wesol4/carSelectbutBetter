import React, { useState, useEffect } from 'react';
import { cars } from './CarList';
import './CarGallery.css';

const CarGallery: React.FC = () => {
	const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
	const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number | null>(null);
	const [imageIndexes, setImageIndexes] = useState<number[]>(Array(cars.length).fill(0));

	const handleClick = (carIndex: number, imageIndex: number) => {
		setSelectedCarIndex(carIndex);
		setFullscreenImageIndex(imageIndex);
	};

	const closeFullscreen = () => {
		setSelectedCarIndex(null);
		setFullscreenImageIndex(null);
	};

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

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (selectedCarIndex !== null && fullscreenImageIndex !== null) {
				if (event.key === 'ArrowRight') {
					nextFullscreenImage();
				} else if (event.key === 'ArrowLeft') {
					prevFullscreenImage();
				} else if (event.key === 'Escape') {
					closeFullscreen();
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [selectedCarIndex, fullscreenImageIndex]);

	return (
		<div>
			<div className="gallery">
				{cars.map((car, index) => (
					<div key={index} className="car-card">
						<div className="image-container">
							<button onClick={() => prevImage(index)}>{'<'}</button>
							<img
								className="thumbnail"
								src={car.imageUrls[imageIndexes[index]]}
								alt={car.name}
								onClick={() => handleClick(index, imageIndexes[index])}
							/>
							<button onClick={() => nextImage(index)}>{'>'}</button>
						</div>
						<div className="car-info" style={{borderStyle: ''}}>
							<h2>{car.name}</h2>
							<p><strong>Silnik:</strong> {car.engine} L</p>
							<p><strong>Moc:</strong> {car.power} KM</p>
							<p><strong>Cena od:</strong> {car.price} PLN</p>
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

			{selectedCarIndex !== null && fullscreenImageIndex !== null && (
				<div className="fullscreen">
					<button className="nav-button left" onClick={(e) => { e.stopPropagation(); prevFullscreenImage(); }}>{'<'}</button>
					<img
						src={cars[selectedCarIndex].imageUrls[fullscreenImageIndex]}
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
