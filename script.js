// Toggle the visibility of a dropdown menu
const toggleDropdown = (dropdown, menu, isOpen) => {
  dropdown.classList.toggle("open", isOpen);
  menu.style.height = isOpen ? `${menu.scrollHeight}px` : 0;
};

// Close all open dropdowns
const closeAllDropdowns = () => {
  document.querySelectorAll(".dropdown-container.open").forEach((openDropdown) => {
    toggleDropdown(openDropdown, openDropdown.querySelector(".dropdown-menu"), false);
  });
};

// Attach event ke sidebar dan dropdown
function attachSidebarEvents() {
  // Dropdown toggle
  document.querySelectorAll(".dropdown-toggle").forEach((dropdownToggle) => {
    dropdownToggle.onclick = function(e) {
      e.preventDefault();
      const dropdown = dropdownToggle.closest(".dropdown-container");
      const menu = dropdown.querySelector(".dropdown-menu");
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();
      toggleDropdown(dropdown, menu, !isOpen);
    };
  });
  // Sidebar collapse
  document.querySelectorAll(".sidebar-toggler, .sidebar-menu-button").forEach((button) => {
    button.onclick = function() {
      closeAllDropdowns();
      document.querySelector(".sidebar").classList.toggle("collapsed");
    };
  });
}

// auto genereated

function generateSidebarListTugas() {
  const tugasDropdown = document.getElementById('auto-tugas-dropdown');
  if (!tugasDropdown) return; // jaga-jaga kalau sidebar belum ada

  tugasDropdown.innerHTML = `
    <a href="#" class="nav-link dropdown-toggle">
      <span class="material-symbols-rounded">local_library</span>
      <span class="nav-label">List Tugas</span>
      <span class="dropdown-icon material-symbols-rounded">keyboard_arrow_down</span>
    </a>
    <ul class="dropdown-menu">
      <li class="nav-item"><a class="nav-link dropdown-title">List Tugas</a></li>
      ${Array.from({length:14}).map((_,i)=>`
        <li class="nav-item">
          <a href="/listPert/pert${i+1}/index.html" class="nav-link dropdown-link">
            Pertemuan ${i+1}
          </a>
        </li>
      `).join('')}
    </ul>
  `;
  // Auto-tag
  document.querySelectorAll('#dashboard *').forEach(el => {
    el.setAttribute('data-dashboard', 'true');
  });
}


// Collapse sidebar by default on small screens
if (window.innerWidth <= 1024) document.querySelector(".sidebar").classList.add("collapsed");
