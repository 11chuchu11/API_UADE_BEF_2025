// Components
import { HomeView } from '@components/Home/HomeView'
import { useScrollToHash } from '@/Hooks/useScrollToHash';
export default function Home() {
	useScrollToHash();
	return <HomeView />
}

