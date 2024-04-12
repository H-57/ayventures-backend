export const cronAuth = (req, res, next) => {
   console.log(req.headers.authorization,`Bearer  ${process.env.CRON_SECRET}`);
    if(req.headers.authorization!== `Bearer  ${process.env.CRON_SECRET}`){
        return res.status(500).json({message:'Unauthorized'});
    }
    next();
}