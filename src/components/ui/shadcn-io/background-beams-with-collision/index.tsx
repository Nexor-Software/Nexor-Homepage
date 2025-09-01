'use client';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';

export const BackgroundBeamsWithCollision = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const parentRef = useRef<HTMLDivElement>(null);

	const beams = [
		{
			initialX: 10,
			translateX: 10,
			duration: 7,
			repeatDelay: 3,
			delay: 2,
		},
		{
			initialX: 600,
			translateX: 600,
			duration: 3,
			repeatDelay: 3,
			delay: 4,
		},
		{
			initialX: 100,
			translateX: 100,
			duration: 7,
			repeatDelay: 7,
			className: 'h-6',
		},
		{
			initialX: 400,
			translateX: 400,
			duration: 5,
			repeatDelay: 14,
			delay: 4,
		},
		{
			initialX: 800,
			translateX: 800,
			duration: 11,
			repeatDelay: 2,
			className: 'h-20',
		},
		{
			initialX: 1000,
			translateX: 1000,
			duration: 4,
			repeatDelay: 2,
			className: 'h-12',
		},
		{
			initialX: 1200,
			translateX: 1200,
			duration: 6,
			repeatDelay: 4,
			delay: 2,
			className: 'h-6',
		},
		{
			initialX: 200,
			translateX: 200,
			duration: 8,
			repeatDelay: 5,
			delay: 1,
			className: 'h-8',
		},
		{
			initialX: 500,
			translateX: 500,
			duration: 6,
			repeatDelay: 8,
			delay: 3,
			className: 'h-10',
		},
		{
			initialX: 900,
			translateX: 900,
			duration: 9,
			repeatDelay: 6,
			delay: 5,
			className: 'h-14',
		},
		{
			initialX: 1100,
			translateX: 1100,
			duration: 5,
			repeatDelay: 10,
			delay: 2,
			className: 'h-6',
		},
		{
			initialX: 300,
			translateX: 300,
			duration: 12,
			repeatDelay: 4,
			delay: 6,
			className: 'h-16',
		},
		{
			initialX: 50,
			translateX: 50,
			duration: 10,
			repeatDelay: 7,
			delay: 0,
			className: 'h-12',
		},
		{
			initialX: 250,
			translateX: 250,
			duration: 4,
			repeatDelay: 9,
			delay: 1,
			className: 'h-8',
		},
		{
			initialX: 450,
			translateX: 450,
			duration: 8,
			repeatDelay: 5,
			delay: 3,
			className: 'h-10',
		},
		{
			initialX: 650,
			translateX: 650,
			duration: 6,
			repeatDelay: 11,
			delay: 2,
			className: 'h-14',
		},
		{
			initialX: 850,
			translateX: 850,
			duration: 9,
			repeatDelay: 6,
			delay: 4,
			className: 'h-6',
		},
		{
			initialX: 1050,
			translateX: 1050,
			duration: 5,
			repeatDelay: 8,
			delay: 1,
			className: 'h-16',
		},
		{
			initialX: 1250,
			translateX: 1250,
			duration: 11,
			repeatDelay: 3,
			delay: 5,
			className: 'h-8',
		},
		{
			initialX: 150,
			translateX: 150,
			duration: 7,
			repeatDelay: 10,
			delay: 2,
			className: 'h-12',
		},
		{
			initialX: 350,
			translateX: 350,
			duration: 8,
			repeatDelay: 7,
			delay: 0,
			className: 'h-10',
		},
		{
			initialX: 550,
			translateX: 550,
			duration: 6,
			repeatDelay: 12,
			delay: 3,
			className: 'h-14',
		},
		{
			initialX: 750,
			translateX: 750,
			duration: 10,
			repeatDelay: 4,
			delay: 1,
			className: 'h-6',
		},
		{
			initialX: 950,
			translateX: 950,
			duration: 5,
			repeatDelay: 9,
			delay: 4,
			className: 'h-16',
		},
		{
			initialX: 1150,
			translateX: 1150,
			duration: 9,
			repeatDelay: 5,
			delay: 2,
			className: 'h-8',
		},
	];

	return (
		<div
			ref={parentRef}
			className={cn(
				'h-auto min-h-[50rem] bg-gradient-to-b from-[#0C1C2C] to-[#0F2235] relative flex flex-col items-center w-full overflow-hidden',
				// h-screen if you want bigger
				className
			)}>
			{beams.map((beam) => (
				<CollisionMechanism
					key={beam.initialX + 'beam-idx'}
					beamOptions={beam}
					containerRef={containerRef}
					parentRef={parentRef}
				/>
			))}

			{children}
			<div
				ref={containerRef}
				className="absolute bottom-0 bg-[#0F2235] w-full inset-x-0 pointer-events-none"
				style={{
					boxShadow:
						'0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
				}}></div>
		</div>
	);
};

const CollisionMechanism = React.forwardRef<
	HTMLDivElement,
	{
		containerRef: React.RefObject<HTMLDivElement | null>;
		parentRef: React.RefObject<HTMLDivElement | null>;
		beamOptions?: {
			initialX?: number;
			translateX?: number;
			initialY?: number;
			translateY?: number;
			rotate?: number;
			className?: string;
			duration?: number;
			delay?: number;
			repeatDelay?: number;
		};
	}
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
	const beamRef = useRef<HTMLDivElement>(null);
	const [collision, setCollision] = useState<{
		detected: boolean;
		coordinates: { x: number; y: number } | null;
	}>({
		detected: false,
		coordinates: null,
	});
	const [beamKey, setBeamKey] = useState(0);
	const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

	useEffect(() => {
		const checkCollision = () => {
			if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
				const beamRect = beamRef.current.getBoundingClientRect();
				const containerRect = containerRef.current.getBoundingClientRect();
				const parentRect = parentRef.current.getBoundingClientRect();

				if (beamRect.bottom >= containerRect.top) {
					const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
					const relativeY = beamRect.bottom - parentRect.top;

					setCollision({
						detected: true,
						coordinates: {
							x: relativeX,
							y: relativeY,
						},
					});
					setCycleCollisionDetected(true);
				}
			}
		};

		const animationInterval = setInterval(checkCollision, 50);

		return () => clearInterval(animationInterval);
	}, [cycleCollisionDetected, containerRef, parentRef]);

	useEffect(() => {
		if (collision.detected && collision.coordinates) {
			setTimeout(() => {
				setCollision({ detected: false, coordinates: null });
				setCycleCollisionDetected(false);
			}, 2000);

			setTimeout(() => {
				setBeamKey((prevKey) => prevKey + 1);
			}, 2000);
		}
	}, [collision]);

	return (
		<>
			<motion.div
				key={beamKey}
				ref={beamRef}
				animate="animate"
				initial={{
					translateY: beamOptions.initialY || '-200px',
					translateX: beamOptions.initialX || '0px',
					rotate: beamOptions.rotate || 0,
				}}
				variants={{
					animate: {
						translateY: beamOptions.translateY || '1800px',
						translateX: beamOptions.translateX || '0px',
						rotate: beamOptions.rotate || 0,
					},
				}}
				transition={{
					duration: beamOptions.duration || 8,
					repeat: Infinity,
					repeatType: 'loop',
					ease: 'linear',
					delay: beamOptions.delay || 0,
					repeatDelay: beamOptions.repeatDelay || 0,
				}}
				className={cn(
					'absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-[#30D6C4] via-[#30D6C4] to-transparent',
					beamOptions.className
				)}
			/>
			<AnimatePresence>
				{collision.detected && collision.coordinates && (
					<Explosion
						key={`${collision.coordinates.x}-${collision.coordinates.y}`}
						className=""
						style={{
							left: `${collision.coordinates.x}px`,
							top: `${collision.coordinates.y}px`,
							transform: 'translate(-50%, -50%)',
						}}
					/>
				)}
			</AnimatePresence>
		</>
	);
});

CollisionMechanism.displayName = 'CollisionMechanism';

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
	const spans = Array.from({ length: 20 }, (_, index) => ({
		id: index,
		initialX: 0,
		initialY: 0,
		directionX: Math.floor(Math.random() * 80 - 40),
		directionY: Math.floor(Math.random() * -50 - 10),
	}));

	return (
		<div {...props} className={cn('absolute z-50 h-2 w-2', props.className)}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1.5, ease: 'easeOut' }}
				className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-[#30D6C4] to-transparent blur-sm"></motion.div>
			{spans.map((span) => (
				<motion.span
					key={span.id}
					initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
					animate={{
						x: span.directionX,
						y: span.directionY,
						opacity: 0,
					}}
					transition={{ duration: Math.random() * 1.5 + 0.5, ease: 'easeOut' }}
					className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-[#30D6C4] to-[#30D6C4]"
				/>
			))}
		</div>
	);
};
