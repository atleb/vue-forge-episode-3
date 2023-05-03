export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body && body.message) {
    return {
      ai: `I'm not sure how i feel about ${body.message}`,
    };
  }

  return {
    ai: `...did you send the magic word?`,
  };
});
