import {handleZuno} from './server/zuno.mjs';
export default {fetch(request, env) {return handleZuno(request, env);}};
