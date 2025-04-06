
import app from './app';
import config from './config/config';
import logger from './helpers/logger';

// app.listen(config.PORT, config.SERVER_URL, ()=> console.log('Connected'))
const server = app.listen(config.PORT);

;(()=>{
  try {

    // console.info('Application started', {
    //   meta: {
    //     PORT: config.PORT,
    //     SERVER_URL: config.SERVER_URL

    //   }
    // })

    logger.info('Application started', {
      meta: {
        PORT: config.PORT,
        SERVER_URL: config.SERVER_URL

      }
    })
  }
  catch(err){
    logger.error('Application Error', {
      meta: err
    })
    server.close((error)=>{
      if(error){
        logger.error('Application Error', {meta: error});
      }
      process.exit(1);
    })
  }
})()