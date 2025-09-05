

export const generateArticle= async(req,res)=>{ 
    try{
        const{userId}=req.auth();
        const{prompt, length}=req.body;
        const plan=req.plan;
        const free_usage=req.free_usage;

        if(plan !='premium' &&free_usage>=10){
            return res.json({success: false,message: "Limit reached. Upgrade to continue."})
        }
         //GOOGLE GEMINI 3:53:47
         //youtube starts from 3:53:47
         //BING CHAT 3:53:47
         

    }catch(error){

    }
}