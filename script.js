        // Programs Data
        const programs = [
            {
                id: 1,
                code: "10.05.01",
                title: "Компьютерная безопасность",
                level: "specialist",
                levelName: "Специалитет",
                form: "full",
                formName: "Очная",
                duration: "5.5 лет",
                places: "26/6/6/22/3",
                exams: "Русский язык, Математика, Физика или Информатика",
                about: "Специалист по компьютерной безопасности защищает данные, сети и системы от взломов и утечек. Он проектирует безопасные ИТ-инфраструктуры, настраивает системы защиты и реагирует на киберинциденты. Работает в IT-отделах компаний, госсектора, различных отраслей.",
                professions: ["Специалист по информационной безопасности", "Системный администратор", "Тестировщик ИТ", "Специалист по автоматизации", "Программист"],
                disciplines: ["Проектирование и анализ защищённых систем", "Администрирование сетей", "Операционные системы и защита данных", "Криптография", "Анализ уязвимостей", "Программирование"],
                competencies: ["Умеет выявлять уязвимости и настраивать средства защиты", "Пишет безопасный код", "Анализирует инциденты и устраняет их последствия", "Работает с нормативными документами по ИБ"],
                cardImage: "images/program-1-card.jpg",
                aboutImage: "images/program-1-about.jpg",
                professionsImage: "images/program-1-professions.jpg"
            },
            {
                id: 2,
                code: "13.03.01",
                title: "Теплоэнергетика и теплотехника",
                level: "bachelor",
                levelName: "Бакалавриат",
                form: "mixed",
                formName: "Очно-заочная",
                duration: "4 года",
                places: "27/5/5/13/16",
                exams: "Русский язык, Математика, Физика или Информатика",
                about: "Специалист по промышленной теплоэнергетике проектирует, эксплуатирует и модернизирует объекты, связанные с производством и распределением тепла. Это котельные, тепловые сети, системы отопления и вентиляции, а также оборудование малой энергетики. ",
                professions: ["Специалист по проектированию тепловых сетей", "Инженер НИОКР", "Специалист по системам отопления, вентиляции и кондиционирования", "Специалист по проектированию котельных и центральных тепловых пунктов"],
                disciplines: ["Техническая термодинамика", "Тепломассообмен", "Гидрогазодинамика", "Компьютерное моделирование", "Тепловые двигатели, насосы и холодильные машины", "Теплоснабжение и автоматизация тепловых процессов"],
                competencies: ["Определять потребности производства в энергоресурсах и рассчитывать их расход", "Проводить инженерные расчёты и проектировать узлы систем теплоснабжения", "Разрабатывать техническую документацию в соответствии с нормативами"],
                cardImage: "images/program-2-card.jpg",
                aboutImage: "images/program-2-about.jpg",
                professionsImage: "images/program-2-professions.jpg"
            },
            {
                id: 3,
                code: "13.04.02",
                title: "Электроэнергетика и электротехника",
                level: "master",
                levelName: "Магистратура",
                form: "full",
                formName: "Очная",
                duration: "2 года",
                places: "13/2/9",
                exams: "Внутренние вступительные испытания",
                about: "Специалист электротранспорта проектирует, обслуживаети модернизирует тяговый подвижной состав: электропоездаи электровозы. Выпускники работают на предприятиях железнодорожного и промышленного транспорта, повышают надёжность техники и внедряют современные технологии. Программа подходит специалистам, которые хотят углубить знания о работе с электрическим подвижным составом",
                professions: ["Инженер-конструктор по тяговому оборудованию", "Специалист по автоматизированным системам управления", "Руководитель службы ремонта подвижного состава", "Инженер по эксплуатации электропоездов", "Мастер или начальник участка"],
                disciplines: ["Электрический транспорт железных дорог", "Динамика и надёжность подвижного состава", "Электроннаяи преобразовательная техника", "Системы автоматизированного управления", "Электрооборудование электроподвижного состава", "Теория проектирования конструкций"],
                competencies: ["Решает инженерные задачи с применением математического моделирования", "Использует ИТ для анализа и расчётов", "Проектирует элементы транспортных объектов", "Планирует и контролирует процессы эксплуатациии ремонта"],
                cardImage: "images/program-3-card.jpg",
                aboutImage: "images/program-3-about.jpg",
                professionsImage: "images/program-3-professions.jpg"
            },
            {
                id: 4,
                code: "15.04.01",
                title: "Машиностроение",
                level: "master",
                levelName: "Магистратура",
                form: "part",
                formName: "Заочная",
                duration: "2.5 года",
                places: "0/0/30",
                exams: "Внутренние вступительные испытания",
                about: "Специалист по машиностроению — это инженер, который отвечает за разработку, внедрение и оптимизацию технологий изготовления изделий на машиностроительных предприятиях. Он проектирует технологические процессы, подбирает оборудование, инструменты и материалы, контролирует качество выпускаемой продукции, организует ремонт и сервисное обслуживание машин и узлов",
                professions: ["Менеджер машиностроительных сфер", "Сервис-инженер", "Специалист по ремонту", "Инженер-технолог"],
                disciplines: ["Основы финишной обработки высокоточных деталей", "Основы инженерного консалтинга", "Современные технологические системы производств", "Основы проектирования и производства продукции", "Проектирование и производство продукции", "Методы оценки эффективности новой техники"],
                competencies: ["Внедряет и осваивает новое технологическое оборудование", "Проектирует технологические процессы машиностроения", "Понимает принципы цифровых технологий и применяет их в инженерной деятельности", "Разрабатывает техническую документацию", "Использует закономерности изготовления изделий с заданными параметрами качества и себестоимости"],
                cardImage: "images/program-4-card.jpg",
                aboutImage: "images/program-4-about.jpg",
                professionsImage: "images/program-4-professions.jpg"
            }
        ];

        // Current filters
        let currentLevelFilter = 'all';
        let currentFormFilter = 'all';

        // Render programs
        function renderPrograms(programsToRender) {
            const grid = document.getElementById('programsGrid');
            grid.innerHTML = '';

            programsToRender.forEach((program, index) => {
                const card = document.createElement('div');
                card.className = 'program-card';
                card.style.animationDelay = `${index * 0.1}s`;
                card.onclick = () => openModal(program);

                const badgeClass = program.level === 'bachelor' ? 'badge-bachelor' : 
                                   program.level === 'specialist' ? 'badge-specialist' : 'badge-master';

                card.innerHTML = `
                    <div class="program-image">
                        <img src="${program.cardImage}" alt="${program.title}" loading="lazy">
                        <span class="program-level-badge ${badgeClass}">${program.levelName}</span>
                    </div>
                    <div class="program-content">
                        <div class="program-code">${program.code}</div>
                        <h3 class="program-title">${program.title}</h3>
                        <div class="program-meta">
                            <div class="program-meta-item">
                                <span>⏱️</span> ${program.duration}
                            </div>
                            <div class="program-meta-item">
                                <span>📚</span> ${program.formName}
                            </div>
                            <div class="program-meta-item">
                                <span>🎯</span> ${program.places.split('/')[0]} бюджет
                            </div>
                        </div>
                        <button class="program-btn">Подробнее →</button>
                    </div>
                `;

                grid.appendChild(card);
            });
        }

        // Filter by level
        function filterByLevel(level) {
            currentLevelFilter = level;
            
            document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === level) {
                    btn.classList.add('active');
                }
            });

            filterPrograms();
        }

        // Filter by form
        function filterByForm(form) {
            currentFormFilter = form;
            
            document.querySelectorAll('.filter-btn[data-form]').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.form === form) {
                    btn.classList.add('active');
                }
            });

            filterPrograms();
        }

        // Filter programs
        function filterPrograms() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            
            const filtered = programs.filter(program => {
                const matchesLevel = currentLevelFilter === 'all' || program.level === currentLevelFilter;
                const matchesForm = currentFormFilter === 'all' || program.form === currentFormFilter;
                const matchesSearch = program.title.toLowerCase().includes(searchTerm) || 
                                     program.code.includes(searchTerm);
                
                return matchesLevel && matchesForm && matchesSearch;
            });

            renderPrograms(filtered);
        }

        // Open modal
        function openModal(program) {
            const modal = document.getElementById('modalOverlay');
            const modalBody = document.getElementById('modalBody');

            modalBody.innerHTML = `
                <div class="modal-hero">
                    <div class="modal-hero-title">${program.title}</div>
                    <div class="modal-hero-subtitle">${program.code} · ${program.levelName}</div>
                </div>
                <div class="modal-info-bar">
                    <div>
                        <div class="modal-info-label">Вступительные испытания</div>
                        <div class="modal-info-value">${program.exams}</div>
                    </div>
                    <div>
                        <div class="modal-info-label">Срок обучения</div>
                        <div class="modal-info-value">${program.duration}</div>
                    </div>
                    <div>
                        <div class="modal-info-label">Количество мест</div>
                        <div class="modal-info-value">${program.places}</div>
                    </div>
                    <div>
                        <div class="modal-info-label">Форма обучения</div>
                        <div class="modal-info-value">${program.formName}</div>
                    </div>
                    <div>
                        <div class="modal-info-label">Уровень образования</div>
                        <div class="modal-info-value">${program.levelName}</div>
                    </div>
                </div>
                <div class="modal-body">
                    <h3 class="modal-section-title">О профессии</h3>
                    <div class="modal-about">
                        <div class="modal-about-text">
                            <p>${program.about}</p>
                        </div>
                        <div class="modal-about-image">
                            <img src="${program.aboutImage}" alt="О профессии ${program.title}" loading="lazy">
                        </div>
                    </div>

                    <div class="modal-section-bar">Осваиваемые профессии</div>
                    <div class="modal-professions">
                        <img src="${program.professionsImage}" alt="Осваиваемые профессии ${program.title}" loading="lazy">
                        <div class="modal-professions-tags">
                            ${program.professions.map(prof => `<span class="modal-profession-tag">${prof}</span>`).join('')}
                        </div>
                    </div>

                    <div class="modal-section-bar">Изучаемые дисциплины</div>
                    <div class="modal-disciplines-grid">
                        ${program.disciplines.map((disc, i) => `
                            <div class="modal-discipline-item">
                                <div class="modal-discipline-number">${i + 1}</div>
                                <div>${disc}</div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="modal-section-bar">Компетенции выпускника</div>
                    <ul class="modal-competencies">
                        ${program.competencies.map(comp => `<li>${comp}</li>`).join('')}
                    </ul>

                    <div class="modal-actions">
                        <a href="https://www.gosuslugi.ru/" target="_blank" class="btn btn-primary">📄 Подать документы</a>
                        <a href="#contacts" class="btn btn-secondary" onclick="closeModal()">📞 Связаться с приёмной комиссией</a>
                    </div>
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal(event) {
            if (event && event.target !== event.currentTarget) return;
            
            const modal = document.getElementById('modalOverlay');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Toggle mobile nav
        function toggleMobileNav() {
            const nav = document.getElementById('mobileNav');
            nav.classList.toggle('active');
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Initialize
        renderPrograms(programs);

        // Close modal on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    
