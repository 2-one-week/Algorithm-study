// 효율성 통과 못함
const LANGUAGE = { cpp: 1, java: 2, python: 3 };

const JOB = { backend: 1, frontend: 2 };

const CAREER = { junior: 1, senior: 2 };

const SOUL_FOOD = { chicken: 1, pizza: 2 };

const solution = (info, query) => {
  const parsedInfo = info.map((userInfo) => {
    const [lang, job, career, soulFood, score] = userInfo.split(' ');
    return {
      type: `${LANGUAGE[lang]}${JOB[job]}${CAREER[career]}${SOUL_FOOD[soulFood]}`,
      score,
    };
  });
  return query.map((q) => {
    const [
      wantedLang,
      _,
      wantedJob,
      __,
      wantedCareer,
      ___,
      wantedSoulFood,
      wantedScore,
    ] = q.split(' ');

    const wanted = `${wantedLang === '-' ? '[0-9]{1}' : LANGUAGE[wantedLang]}${
      wantedJob === '-' ? '[0-9]{1}' : JOB[wantedJob]
    }${wantedCareer === '-' ? '[0-9]{1}' : CAREER[wantedCareer]}${
      wantedSoulFood === '-' ? '[0-9]{1}' : SOUL_FOOD[wantedSoulFood]
    }$`;
    const checkTypeRex = new RegExp(wanted);
    return parsedInfo.filter(
      ({ type, score }) => checkTypeRex.test(type) && +score >= +wantedScore,
    ).length;
  });
};
