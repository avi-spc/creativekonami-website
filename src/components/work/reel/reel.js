import { useEffect, useRef, useContext } from 'react';
import { gsap } from 'gsap';

import { WorkContext } from '../../../contexts/workContext';

import BannerContent from '../../banner/bannerContent';
import WorkTabs from '../workTabs';
import IndividualEpisode from '../series/individualEpisode';

const Reel = () => {
	const reelPage = useRef();

	useEffect(() => {
		window.scrollTo(0, 600);

		gsap.from(reelPage.current, {
			y: '5%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});

		gsap.to(reelPage.current, {
			opacity: '100%',
			duration: 0.5,
			ease: 'Power2.easeOut'
		});
	});

	const { reel } = useContext(WorkContext);

	return (
		<div>
			<BannerContent />
			<WorkTabs />
			<div className="work-container" ref={reelPage}>
				<IndividualEpisode
					episodeTitle={reel.title}
					episodeVideoUrl={reel.hostedVideoUrl}
				/>
			</div>
		</div>
	);
};

export default Reel;
