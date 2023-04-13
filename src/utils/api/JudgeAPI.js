import request from "../request";
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

export default {
    async judge(data){
        let res = {judgeReplyDesc: "等待判题"}
        await request.post("/lanqiao/nccommon/submit_cd_selftest_withoutdata?", data).then(async RES => {
            while(true){
                await request.get("/lanqiao/nccommon/status-self-test", {
                    params:{
                        submissionId: RES.data,
                        selfType: 8,
                    }
                }).then(async RES1 => {
                    await sleep( 1000)
                    res = RES1
                })
                if(res.judgeReplyDesc != "等待判题") break;
            }
        })
        return res
    },
}