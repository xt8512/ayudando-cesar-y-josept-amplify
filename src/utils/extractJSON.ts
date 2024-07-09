export function extractJsonFromString(str: string) {
  const jsonStart = str.indexOf("{");
  const jsonEnd = str.lastIndexOf("}") + 1;

  if (jsonStart === -1 || jsonEnd === -1) {
    return { hasJson: false, json: null };
  }

  const jsonString = str.slice(jsonStart, jsonEnd);

  try {
    const parsedJson = JSON.parse(jsonString);
    return { hasJson: true, json: parsedJson };
  } catch (error) {
    return { hasJson: false, json: null };
  }
}
