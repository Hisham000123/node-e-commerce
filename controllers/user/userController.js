const loadHomePage = async(req,res)=>{


    try{
        return res.render("home");

    }catch(err){
        console.log("home page is not found",err.message)
        res.status(500).send("server er")
    }
}

const pageNotFound =async (req,res)=>{
    try{
  return res.render("page-404")

    } catch(err){
     res.redirect("pageNotFound")


    }
  
}

export default {pageNotFound,loadHomePage}