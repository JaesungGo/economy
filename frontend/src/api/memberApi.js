import api from '@/api';

// const api = axios.create({
//   baseURL: '/api/member', // 백엔드 API 기본 URL
//   withCredentials: true, // 세션 쿠키를 포함하기 위함
// });

// export default api;

const BASE_URL = '/api/member';
const headers = { 'Content-Type': 'application/json' };

export default {
    async create(member) {
        const { data } = await api.post(`${BASE_URL}/join`, member, headers);
        return data;
    },

    //로그인
    async login(loginDTO) {
        const { data } = await api.post(`${BASE_URL}/login`, loginDTO, headers);
        console.log('POST MemberLogin :', data);
        return data;
    },

    //로그아웃
    async logout() {
        const { data } = await api.post(`${BASE_URL}/logout`, {}, headers);
        console.log('POST Logout : ', data);
        return data;
    },

    // 로그인 확인
    async checkLogin() {
        const { data } = await api.get(`${BASE_URL}/check-login`, headers);
        console.log('GET CheckLogin :', data);
        return data; // 현재 로그인 상태 반환
    },

    // 회원 정보 조회
    async getMember() {
        const { data } = await api.get(`${BASE_URL}/`, headers);
        console.log('Get Member GET:', data);
        return data; // 회원 정보 반환
    },

    // 회원탈퇴
    async deleteMember(memberNo) {
        const { data } = await api.delete(`${BASE_URL}/${memberNo}`, headers);
        console.log('DELETE DeleteMember :', data);
        return data; // 회원탈퇴 성공 여부 반환
    },
};
