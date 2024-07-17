import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieCard } from './movieCard';

import "swiper/css";

export const MovieGrid = ({ data }) =>
    <Swiper
      spaceBetween={10}
      slidesPerView={7}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
       {data.map(movie => (
            <SwiperSlide key={`${movie.id}-${movie.title}`}>
               <Link href={`/movie/${encodeURIComponent(movie.id)}`}>
                        <MovieCard movie={movie} />
                </Link> 
            </SwiperSlide>
       ))}
    </Swiper>
