const GITHUB_USERNAME = "Chanuka999";
const CACHE_KEY = "chanuka-github-language-stats";
const CACHE_DURATION = 24 * 60 * 60 * 1000;

const languageAliases = {
  JavaScript: "JavaScript",
  TypeScript: "TypeScript",
  HTML: "HTML",
  CSS: "CSS",
  PHP: "PHP",
  Python: "Python",
  Java: "Java",
  Dart: "Dart",
};

export const getGitHubLanguageStats = async () => {
  const cachedData = localStorage.getItem(CACHE_KEY);

  if (cachedData) {
    const parsedCache = JSON.parse(cachedData);

    if (Date.now() - parsedCache.timestamp < CACHE_DURATION) {
      return parsedCache.languages;
    }
  }

  const repositoriesResponse = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&type=owner&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    },
  );

  if (!repositoriesResponse.ok) {
    throw new Error("Unable to load GitHub repositories.");
  }

  const repositories = await repositoriesResponse.json();

  const selectedRepositories = repositories
    .filter((repository) => !repository.fork && !repository.archived)
    .slice(0, 40);

  const languageTotals = {};

  for (const repository of selectedRepositories) {
    const languagesResponse = await fetch(repository.languages_url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!languagesResponse.ok) {
      continue;
    }

    const languages = await languagesResponse.json();

    Object.entries(languages).forEach(([language, bytes]) => {
      const normalizedLanguage = languageAliases[language] ?? language;

      languageTotals[normalizedLanguage] =
        (languageTotals[normalizedLanguage] ?? 0) + bytes;
    });
  }

  const totalBytes = Object.values(languageTotals).reduce(
    (total, bytes) => total + bytes,
    0,
  );

  if (totalBytes === 0) {
    return {};
  }

  const percentages = Object.fromEntries(
    Object.entries(languageTotals).map(([language, bytes]) => [
      language,
      Number(((bytes / totalBytes) * 100).toFixed(1)),
    ]),
  );

  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({
      timestamp: Date.now(),
      languages: percentages,
    }),
  );

  return percentages;
};