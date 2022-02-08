import { FetchOptions } from '../../interface/FetchOptions';
import { SearchProfileApiData } from '../../interface/Profile';

interface Props {
  location: string;
  availability: string;
}

export async function searchProfiles({ location, availability }: Props): Promise<SearchProfileApiData> {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    credentials: 'include',
  };
  return await fetch(`/profile/search?search=${location}&date=${availability}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
}
