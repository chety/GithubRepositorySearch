import {parseResponse, getTotalPageCount, getRepositoryLanguges, getRepositoriesByRepoName} from "./index";

function getLinkHeader() {
    return `<https://api.github.com/search/repositories?q=javascript&page=2>; rel="next", <https://api.github.com/search/repositories?q=javascript&page=34>; rel="last"`
}

describe("api tests", () => {
    function getResponse() {
        return {
            headers: {
                get() {
                    return getLinkHeader()
                }
            }
        }
    }

    it('parseResponse should return right value', function () {
        expect(parseResponse(getResponse())).toEqual(["34"])
        expect(parseResponse(null)).toBeNull()
    });

    it('getTotalPageCount should return right value', function () {
        const response = getResponse()
        expect(getTotalPageCount(response)).toEqual(34)
        expect(getTotalPageCount(null)).toEqual(0)
    });
})

describe("getRepositoryLanguges async function tests", () => {
    const promiseAllOriginal = Promise.all;
    const expectedLanguages = ["javascript", "golang", "c#"]
    beforeAll(() => {
        Promise.all = jest.fn().mockResolvedValue(expectedLanguages)
    })
    afterAll(() => {
        Promise.all = promiseAllOriginal;
    })
    it('getRepositoryLanguges should right value', async function () {
        const repos = [{id: 1, languages_url: "/languages-1"}, {id: 2, languages_url: "/languages-2"}]
        const languages = await getRepositoryLanguges(repos)
        expect(languages).toEqual(expectedLanguages)
    });
})

describe("getRepositoriesByRepoName async function tests", () => {
    const fetchOriginal = fetch;
    const promiseAllOriginal = Promise.all;
    const expectedLanguages = [{data: {"javascript": 12}}, {data: {"golang": 44}}, {data: {"c#": 33}}]

    beforeAll(() => {
        const repos = [{id: 1, languages_url: "/languages-1"}, {id: 2, languages_url: "/languages-2"}]
        const response = {
            headers: {
                get() {
                    return getLinkHeader()
                }
            },
            json() {
                return {
                    total_count: 2,
                    items: repos
                }
            }
        }
        fetch = jest.fn().mockResolvedValue(response)
        Promise.all = jest.fn().mockResolvedValue(expectedLanguages)
    })

    afterAll(() => {
        Promise.all = promiseAllOriginal;
        fetch = fetchOriginal
    })

    it('should return right value', async function () {
        const expected = [
            {
                "items": [
                    {
                        "id": 1,
                        "languages": [
                            "javascript",
                        ],
                        "languages_url": "/languages-1",
                    },
                    {
                        "id": 2,
                        "languages": [
                            "golang",
                        ],
                        "languages_url": "/languages-2",
                    },
                ],
                "total_count": 2,
            },
            34,
            2,
        ]
        const repos = await getRepositoriesByRepoName("react")
        expect(repos).toEqual(expected)
    });

})