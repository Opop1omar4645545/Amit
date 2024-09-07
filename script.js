const rocket = document.getElementById('rocket');
const chickens = document.getElementById('chickens');
const game = document.getElementById('game');

// Create 57 chickens
for (let i = 0; i < 57; i++) {
    const chicken = document.createElement('div');
    chicken.className = 'chicken';
    chickens.appendChild(chicken);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const rocketRect = rocket.getBoundingClientRect();
    const gameRect = game.getBoundingClientRect();

    // Rocket movement
    if (key === 'ArrowRight' && rocketRect.right < gameRect.right) {
        rocket.style.left = rocket.offsetLeft + 10 + 'px';
    } else if (key === 'ArrowLeft' && rocketRect.left > gameRect.left) {
        rocket.style.left = rocket.offsetLeft - 10 + 'px';
    } else if (key === 'ArrowUp' && rocketRect.top > gameRect.top) {
        rocket.style.top = rocket.offsetTop - 10 + 'px';
    } else if (key === 'ArrowDown' && rocketRect.bottom < gameRect.bottom) {
        rocket.style.top = rocket.offsetTop + 10 + 'px';
    }

    // Shooting bullets
    if (event.code === 'Space') {
        let x = 0;
        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        rocket.appendChild(bullet);

        let bulletInterval = setInterval(() => {
            x += 10;
            bullet.style.bottom = x + 'px';

            // Remove bullet if it goes out of bounds
            if (x > 1000) {
                clearInterval(bulletInterval);
                bullet.remove();
            }
        }, 50);
    }
});
