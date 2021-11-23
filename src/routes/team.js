export async function get() {
	const res = await fetch(`${import.meta.env.VITE_PUBLIC_BASE_PATH}/data/about.json`);
	const data = await res.json();

	return { body: data };
}