export async function get() {
	const res = await fetch(`${import.meta.env.VITE_PUBLIC_BASE_PATH}/data/press.json`);
	const data = await res.json();

	return { body: data };
}