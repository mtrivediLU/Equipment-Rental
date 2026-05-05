/* =========================================================================
   Equipment Rental Executive Dashboard — Case Study
   Interaction layer: vanilla JS, no dependencies
   ========================================================================= */

(function () {
  'use strict';

  // ---------- Helpers ----------
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ---------- Footer year ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Mobile navigation toggle ----------
  const navToggle = $('.nav__toggle');
  const navMenu   = $('#nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when a link is clicked
    $$('a', navMenu).forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          navMenu.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });
  }

  // ---------- Tabs (Live Dashboard / Data Source) ----------
  $$('[data-tabs]').forEach(group => {
    const tabs   = $$('[data-tab-target]', group);
    const panels = $$('.tabs__panel', group);

    function activate(targetId) {
      tabs.forEach(t => {
        const isActive = t.dataset.tabTarget === targetId;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', String(isActive));
        t.tabIndex = isActive ? 0 : -1;
      });
      panels.forEach(p => {
        const isActive = p.id === targetId;
        p.classList.toggle('is-active', isActive);
        if (isActive) p.removeAttribute('hidden');
        else p.setAttribute('hidden', '');
      });
    }

    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => activate(tab.dataset.tabTarget));
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const dir = e.key === 'ArrowRight' ? 1 : -1;
          const next = tabs[(idx + dir + tabs.length) % tabs.length];
          next.focus();
          activate(next.dataset.tabTarget);
        }
      });
    });
  });

  // ---------- Accordion (DAX section) ----------
  $$('[data-accordion]').forEach(accordion => {
    const triggers = $$('[data-accordion-trigger]', accordion);

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('[data-accordion-item]');
        if (!item) return;
        const isOpen = item.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(isOpen));
      });
    });
  });

  // ---------- Copy code buttons ----------
  $$('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeBlock = btn.closest('.code')?.querySelector('pre code');
      if (!codeBlock) return;
      const text = codeBlock.textContent;

      const success = () => {
        const original = btn.textContent;
        btn.classList.add('is-copied');
        btn.textContent = 'Copied';
        setTimeout(() => {
          btn.classList.remove('is-copied');
          btn.textContent = original;
        }, 1600);
      };

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-secure contexts
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        success();
      } catch (err) {
        btn.textContent = 'Press Ctrl+C';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      }
    });
  });

  // ---------- Back to top ----------
  const backToTop = $('[data-back-to-top]');
  if (backToTop) {
    const onScroll = () => {
      if (window.scrollY > 600) backToTop.classList.add('is-visible');
      else backToTop.classList.remove('is-visible');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------- Scrollspy (active nav highlight) ----------
  const navLinks = $$('[data-nav]');
  const sectionIds = navLinks
    .map(a => a.getAttribute('href'))
    .filter(href => href && href.startsWith('#'))
    .map(href => href.slice(1));

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const setActive = (id) => {
      navLinks.forEach(link => {
        const matches = link.getAttribute('href') === '#' + id;
        link.classList.toggle('is-active', matches);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      // Pick the entry closest to the top that is intersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) {
        setActive(visible[0].target.id);
      }
    }, {
      // Trigger when section's top crosses ~25% from the top of the viewport
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    });

    sections.forEach(s => observer.observe(s));
  }

  // ---------- Reveal on scroll ----------
  // Only enabled where IntersectionObserver and motion-allowed
  const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (motionOK && 'IntersectionObserver' in window) {
    const targets = $$(
      '.section__header, .decision, .ai-card, .data-card, .finding, .impl-grid li, .roadmap__item, .alignment__row:not(.alignment__row--head)'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    targets.forEach(el => revealObserver.observe(el));
  }

})();
